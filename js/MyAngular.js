(function(angular, undefined){
  "use strict";

  angular
   .module('toolsApp', ['ngMaterial'])
   .controller('myController', AppController);

  function AppController($scope, $mdDialog) {

    $scope.showDialog = showDialog;
    $scope.items = items;

    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: 'items/item.temp.html',
         clickOutsideToClose:true,
         fullscreen: true, // Only for -xs, -sm breakpoints.
         controller: DialogController
      });
      function DialogController($scope, $mdDialog) {
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    }
  }
})(angular);

var items = [
    {tag: "T1", name: "Test 1", color: "red"},
    {tag: "T2", name: "Test 2", color: "pink"},
    {tag: "T3", name: "Test 3", color: "purple"},
    {tag: "T3", name: "Test 3", color: "yellow"},
    {tag: "T3", name: "Test 3", color: "lime"},
    {tag: "T3", name: "Test 3", color: "orange"},
    {tag: "T3", name: "Test 3", color: "blue"},
    {tag: "T3", name: "Test 3", color: "cyan"},
    {tag: "T3", name: "Test 3", color: "teal"},
];
