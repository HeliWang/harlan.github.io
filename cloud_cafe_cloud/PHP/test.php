<?php
header('Content-type: application/json');


checkout();


function checkout(){
	$cartJson = json_decode(file_get_contents('php://input'), TRUE); // parse json representing cart (sent to here from front end)
	
	$conn = sasql_connect("dbn=CloudCafeCloud;uid=dba;pwd=sql;");
	
	
	
	$query = "INSERT INTO Transaction (EmpId, MealId) VALUES (".$cartJson['Transaction']['empId'].", ".$cartJson['Transaction']['mealId'].")";
	echo $query;
				
	sasql_query($conn, $query);
	
	sasql_close($conn);
}

?>