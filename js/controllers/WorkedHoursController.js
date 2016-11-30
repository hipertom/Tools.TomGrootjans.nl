function WorkedHoursController($scope, $http, workedService) {

    workedService.GetItems(function (err, result) {
        if (err) throw err;
        console.log(result);
        $scope.worked = sortMore(result);
    });

    $scope.weekdays = daysFull;
    $scope.months = monthsFull;

    $scope.removeItem = function (id) {
        //console.log("Deleting item with id: "+ id);
        workedService.removeItem(id);
    };

}