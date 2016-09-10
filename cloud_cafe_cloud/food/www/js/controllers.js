angular.module('app.controllers', [])

   
.controller('loginCtrl',['$scope', '$http','$rootScope','$state', '$stateParams', function ($scope,$http,$rootScope,$state, $stateParams)
 {
     
    $scope.account={};
    $scope.account.iNumber = "admin";
    $scope.account.password = "admin";
    
    $scope.logIn = function () {
        /*
     $rootScope.user = $scope.account.iNumber;
        console.log($scope.account.iNumber);
        var req = {
            method: 'POST',
            url: 'https://10.7.185.166/CloudCafeCloud/Authentication.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: 
                {
                    "login": {
                        "EmpId": $scope.account.iNumber,
                		"Pw": $scope.account.password
                    }
                }
        };
            console.log(req);
        $http(req).then(function (response) {
			console.log(response);
            if (response.data.status.message == "failure") {
               $scope.loginerr = true;
            }
            else {
                  $scope.loginerr = false;
                  $scope.Connecterr = false;
                  
              $state.go('tabsController.menu');
            }
        },function errorCallback(response) {
              $scope.Connecterr = true;
            console.log(response);
        }); */
     $state.go('tabsController.menu');
    };
    
}])
 
 
.controller('menuCtrl',['$scope', '$http','$rootScope','$state', '$stateParams', function ($scope,$http,$rootScope,$state, $stateParams)
 {
     $scope.Math = window.Math;
  $scope.loginerr = false;
  $scope.Connecterr = false;
  $scope.shouldShowDelete=true;
  $scope.Cart=[];
  
  
  $scope.menuJson = {
    "categories": [
        {
            "Pita": {
        		"cost": 5.79,
        		"items": [
                    {
                      "MealId":"id1", 
                      "itemName":"Chicken Caesar Pita", 
                      "description":"Chicken Breast and Bacon drizzled with Caesar Dressing",
                      "url":"http://i3.meishichina.com/attachment/recipe/2013/05/24/20130524093407765925839.jpg"
                    },
                    {
                      "MealId":"id2", 
                      "itemName":"Mushroom Pita Pockets", 
                      "description":"A fresh and crunchy salad filling for a low fat sandwich",
                      "url":"../www/img/OP5lxMhpRJCXPmpCbagt_napa_chicken_pita_salad.png"
                    }
                ]
            }
        },
        {
            "Burger": {
        		"cost": 6.28,
        		"items": [
                    {
                      "mealId":"id3", 
                      "itemName":"Bacon Cheeseburger", 
                      "description":"a signature flame-grilled beef patty on a toasted bun.",
                      "url":"http://www.topratedsteakhouses.com/wp-content/uploads/2014/01/Beer-and-Pretzel-Hamburger.jpg"
                    }
                ]
            }
         }
    ]
  };
  /*
  
        $scope.refreshMenu = function () {
        var reqss = {
            method: 'GET',
            url: 'https://10.7.185.166/CloudCafeCloud/Fooditems.php'
        };
        $http(reqss).then(function (response) {
			console.log(response);
            $scope.menuJson = response.data;
        },function errorCallback(response) {
            console.log(response);
        });
    };
  
  $scope.refreshMenu();
  */
  $scope.addToCart = function (itemID, itemName, iNumber) {
     console.log($rootScope.user);
    $scope.Cart.push({
        mealId: itemID,
        mealName: itemName,
        empId: $rootScope.user
    });
  };
  
  $scope.removeItem = function (index) {
    $scope.Cart.splice(index, 1);
  };
  
  $scope.checkOut = function () {
      
      
      /*
    $scope.Cart.forEach(function(entry) {
        console.log(entry);
    });
    $scope.formData = angular.toJson({
            Transaction: $scope.Cart
        });*/
   $scope.formData = angular.toJson($scope.Cart);

    console.log($scope.formData);
    /*
    var req = {
        method: 'POST',
        url: 'https://10.7.185.166/CloudCafeCloud/Checkout.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            Transaction: $scope.Cart
        }
    }
    $http(req).then(function (response) { 
        console.log(response); 
    },function errorCallback(response) {
        console.log("fail");
    });
    */
    $state.go('tabsController.orderHistory');
  
  };
  
}])
   
.controller('userInformationCtrl', function($scope) {

})
   
.controller('orderHistoryCtrl', function($scope) {
$scope.CurrentDate = new Date();

})
      
   