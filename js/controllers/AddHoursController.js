function AddHoursController($scope, $http, $mdDialog, $route, workedService) {
        $scope.startTimes = ["09:30", "12:00", "17:00"];
        $scope.endTimes = ["17:00", "17:30", "21:00"];
        var weekday = new Array(7);
        weekday[0] = "Zondag";
        weekday[1] = "Maandag";
        weekday[2] = "Disndag";
        weekday[3] = "Woensdag";
        weekday[4] = "Donderdag";
        weekday[5] = "Vrijdag";
        weekday[6] = "Zaterdag";

        $scope.saveHours = function() {
            var data = $scope.FormData;

            var tempObj = {
                day: data.date.getDay(),
                date: data.date.getDate(),
                month: data.date.getMonth(),
                year: data.date.getFullYear(),
                start: data.start,
                end: data.end,
                pauze: data.pauze
            };

            workedService.AddItem(tempObj, function (err, result) {
                console.log(result);
            })
            $mdDialog.hide();
        };


    }