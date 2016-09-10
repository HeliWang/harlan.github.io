<?php
header('Content-type: application/json');
include "Cors.php";

cors();
checkout();

function checkout(){
	$cartJson = json_decode(file_get_contents('php://input'), TRUE); // parse json representing cart (sent to here from front end)
	
	$conn = sasql_connect("dbn=CloudCafeCloud;uid=dba;pwd=sql;");
	
	for ($i = 0; $i < count($cartJson['Transaction']); $i ++){
		$query = "INSERT INTO Transaction (EmpId, MealId) VALUES ('".$cartJson['Transaction'][$i]['empId']."', ".$cartJson['Transaction'][$i]['mealId'].")";
		sasql_query($conn, $query);
	}
				
	sasql_close($conn);
}

?>