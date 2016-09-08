'use strict';
app.controller('step1Controller', ['$scope', '$location', function ($scope, $location) {
    $scope.go = function (path) {
        $location.path(path);
    };
    console.log("step1Controller");

}]);