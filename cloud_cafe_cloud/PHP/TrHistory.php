<?php
header('Content-type: application/json');
include "Cors.php";

cors();
getTrHistory();

function getTrHistory(){
	$employeeJson = json_decode(file_get_contents('php://input'), TRUE); // parse json representing empId (sent to here from front end)
	
	$conn = sasql_connect("dbn=CloudCafeCloud;uid=dba;pwd=sql;");
	
	$query = "INSERT INTO Transaction (EmpId, MealId) VALUES ('".$cartJson['Transaction'][$i]['empId']."', ".$cartJson['Transaction'][$i]['mealId'].")";
		sasql_query($conn, $query);
				
	sasql_close($conn);
}

?>