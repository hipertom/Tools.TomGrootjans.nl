function AddHoursController($scope, $http, $mdDialog, $route, workedService) {
    // vars
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        }
    }
    var startTimes = ["09:30", "12:00", "17:00"];
    var endTimes = ["17:00", "17:30", "21:00"];

    // scopes

    $scope.formContent = { // default values for form
        start: startTimes[0],
        end: endTimes[0],
        pauze: "true"
    };

    $scope.submit = function (data) {
        
        var obj = {
            id: Date.now(),
            day: data.date.getDay(),
            date: data.date.getDate(),
            month: data.date.getMonth(),
            year: data.date.getFullYear(),
            start: data.start,
            end: data.end,
            pauze: (data.pauze === "true") ? true : false
        };
        workedService.addItem(obj);
        $mdDialog.hide();
    }

    $scope.startTimes = startTimes;
    $scope.endTimes = endTimes;

}

function datepickerConfig($mdDateLocaleProvider) {
    $mdDateLocaleProvider.firstDayOfWeek = 1;
    $mdDateLocaleProvider.months = monthsFull;
    $mdDateLocaleProvider.shortMonths = monthsShort;
    $mdDateLocaleProvider.days = daysFull
    $mdDateLocaleProvider.shortDays = daysShort;
}
