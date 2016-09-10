
<?php
header('Content-type: application/json');
include "Cors.php";

cors();
authenticate();

function authenticate(){
	$loginJson = json_decode(file_get_contents('php://input'), TRUE); // parse login info JSON (sent to here from front end)
	
	//error_log("received from POST: '".$loginJson['login']['Pw'].", ".$loginJson['login']['Pw']."'");
	
	$conn = sasql_connect("dbn=CloudCafeCloud;uid=dba;pwd=sql;");
	$result = sasql_query($conn, "SELECT EmpId, Pw FROM Employee");
	
	$authSuccess = "failure";
	
	if ($result) { // if result of query contains some data
		
		
		while ($obj = sasql_fetch_object($result)) { // get a row of data from query result
		   if ($obj->EmpId == $loginJson['login']['EmpId'] and $obj->Pw == $loginJson['login']['Pw']){
				$authSuccess = "success";
			}
		}
		sasql_free_result($result);
	}
	
	sasql_close($conn);
	
	echo json_encode(array('status' => array('message' => $authSuccess))); // return
}

?>
