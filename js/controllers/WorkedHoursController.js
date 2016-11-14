function WorkedHoursController($scope, $http, workedService) {
        workedService.GetItems(function(err, result) {
            if (err) throw err;
            $scope.worked = result;
        });
    }