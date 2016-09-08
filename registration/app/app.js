var app = angular.module('gos', ['ngAria', 'ngRoute', 'jcs-autoValidate',  'flow.provider', 'flow.init', 'flow.events', 'flow.btn',
  'flow.drop', 'flow.transfers', 'flow.img', 'flow.dragEvents']);

app.controller('mainController', ['$scope', '$location', function ($scope, $location) {
    $scope.go = function (path) {
        $location.path(path);
    };
    $scope.formdata = {
        salutation: null,
    };
    console.log("mainController");
}]);

app.config(function ($routeProvider) {
    console.log("route-load");

    $routeProvider.when("/step1", {
        controller: "step1Controller",
        templateUrl: "app/views/step1.html"
    });
    $routeProvider.when("/step2", {
        controller: "step2Controller",
        templateUrl: "app/views/step2.html"
    });
    $routeProvider.when("/step3", {
        controller: "step3Controller",
        templateUrl: "app/views/step3.html"
    });
    $routeProvider.when("/step4", {
        controller: "step4Controller",
        templateUrl: "app/views/step4.html"
    });
    $routeProvider.when("/step5", {
        controller: "step5Controller",
        templateUrl: "app/views/step5.html"
    });
    $routeProvider.when("/step6", {
        controller: "step6Controller",
        templateUrl: "app/views/step6.html"
    });
    $routeProvider.when("/step7", {
        controller: "step7Controller",
        templateUrl: "app/views/step7.html"
    });
    $routeProvider.otherwise({ redirectTo: "/step1" });

});

