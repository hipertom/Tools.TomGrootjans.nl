var toolsApp = angular.module('toolsApp', []);

toolsApp.controller('Ctrl', function Ctrl($scope) {
    $scope.Test = 4;

    $scope.items = [
        {name: "Test 1", color: "#fdfdfd"},
        {name: "Test 2", color: "#ededed"},
        {name: "Test 3", color: "#111111"}
    ];
})
