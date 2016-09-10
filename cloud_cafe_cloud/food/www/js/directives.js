angular.module('app.directives', [])

.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function($scope, $el) {
           
      $scope.$on("$ionicView.enter", function () {
        $rootScope.hideTabs = true;
      });
      $scope.$on("$ionicView.leave", function () {
        $rootScope.hideTabs = false;
      });
        }
    };
})