function WorkedHoursController($scope, $http, workedService) {
        workedService.GetItems(function(err, result) {
            if (err) throw err;
            $scope.worked = result;
        });

        $scope.weekdays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Zaterdag"];

        $scope.months = ["januari", "februari", "maart", "april", "mei", "juni", "july", "augustus", "september", "oktober", "november", "december"];

        
    }