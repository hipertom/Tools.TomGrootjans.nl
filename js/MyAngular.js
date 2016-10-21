(function(angular, undefined){
  "use strict";

  angular
   .module('toolsApp', ['ngMaterial'])
   .controller('myController', AppController);

  function AppController($scope, $mdDialog) {

    $scope.showDialog = showDialog;
    $scope.items = items;

    function showDialog($event, name) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: 'items/'+name+'.temp.html',
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
    {tag: "T1", name: "Test 1", filename: "test1", color: "red"},
    {tag: "T2", name: "Test 2", filename: "test2", color: "pink"},
    {tag: "T3", name: "Test 3", filename: "test3", color: "purple"},
    {tag: "T4", name: "Test 4", filename: "test4", color: "yellow"},
    {tag: "T5", name: "Test 5", filename: "test5", color: "lime"},
    {tag: "T6", name: "Test 6", filename: "test6", color: "orange"},
    {tag: "T7", name: "Test 7", filename: "test7", color: "blue"},
    {tag: "T8", name: "Test 8", filename: "test8", color: "cyan"},
    {tag: "T9", name: "Test 9", filename: "test9", color: "teal"},
];
