angular.module('toolsApp', ['ngMaterial'])
.controller('myController', function($scope, $mdDialog){
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.items = items;

    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'items/item.temp.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };
});

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



function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
}
