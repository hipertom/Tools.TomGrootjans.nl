(function(){
    var app = angular.module('toolsApp', []);

    app.controller('myController', function($scope){
        $scope.Test = 4;

        $scope.items = items;
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

})();
