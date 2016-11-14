function WorkedServiceFun($http) {
    this.items = [];

    this.GetItems = function (cb) {
        var self = this;
        $http.get(tempURL)
            .then(
                function (response) { // correct
                    self.items = response.data;
                    return cb(null, response.data);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    return cb(response.status, null);
                });
        return self;
    }

    this.AddItem = function (obj, cb) {
        var self = this;
        $http({
                method: 'POST',
                url: "save.php",
                data: obj,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            .then(
                function (response) { // correct
                    self.items.push(obj);
                    cb(null, obj);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    cb(response.status, null)
                }
            );
        return self;
    }
}

function AddHoursController($scope, $http, $mdDialog, $route, workedService) {
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        }
    }

    $scope.startTimes = ["09:30", "12:00", "17:00"];
    $scope.endTimes = ["17:00", "17:30", "21:00"];

    $scope.saveHours = function () {
        var data = $scope.FormData;

        var tempObj = {
            id: Date.now(),
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