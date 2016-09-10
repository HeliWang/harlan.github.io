<?php
header('Content-type: application/json');
include "Cors.php";

cors();
getFoodItems();

function getFoodItems(){
	$conn = sasql_connect("dbn=CloudCafeCloud;uid=dba;pwd=sql;");
	
	$foodJson = Array("categories" => Array()); // new Array("mealType" => "", "cost" => "", "items" => ""
	
	// Get all meal types
	$mtQuery = 'SELECT MealType FROM MealType';
	$result = sasql_query($conn, $mtQuery);
	
	if ($result) { // if result of query contains some data
		while ($obj = sasql_fetch_object($result)) { // get meal types
			
			$foodType = Array($obj->MealType => Array());
			
			$mealQuery = "select Meal.MealId, Meal.ItemName, Meal.Description, Meal.Url, MealType.Cost, MealType.MealType
				from Meal
				inner join MealType
				on Meal.MtId=MealType.MtId
				where MealType.MealType = '". $obj->MealType . "'";
			$mealResult = sasql_query($conn, $mealQuery);
			$foodType[$obj->MealType]["items"] = Array(); // set up items array
			while ($obj2 = sasql_fetch_object($mealResult)) { // data for each food item in a meal type
				$foodType[$obj->MealType]["cost"] = $obj2->Cost;
				array_push($foodType[$obj->MealType]["items"], Array("MealId" => $obj2->MealId, "itemName" => $obj2->ItemName, "description" => $obj2->Description, "url" => $obj2->Url));
			}	
			sasql_free_result($mealResult);
			array_push($foodJson['categories'], $foodType); // add each food type nest to categories
		}
		sasql_free_result($result);
	}
	
	sasql_close($conn);
	echo json_encode($foodJson);
}

?>