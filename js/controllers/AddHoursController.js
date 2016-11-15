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
        end: endTimes[1],
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
            pauze: data.pauze
        };

        workedService.addItem(obj);
        $mdDialog.hide();
    }

    $scope.startTimes = startTimes;
    $scope.endTimes = endTimes;

}

function WorkedServiceFun($http) {
    this.items = new Array();

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

    this.addItem = function (obj) {
        this.items.push(obj);

        var myJsonString = angular.toJson(this.items);
        this.updateJson(myJsonString, function (err, result) {
            if (err) throw err;
        });
    }

    this.removeItem = function (id) {
        var temp = this.items;
        var itemID = id;

        $.each(temp, function (i) {
            if (temp[i].id === itemID) {
                console.log("Removing: " + temp[i].id);
                temp.splice(i, 1);
                return false;
            }
        });
        this.items = temp;

        var myJsonString = angular.toJson(this.items);
        this.updateJson(myJsonString, function (err, result) {
            if (err) throw err;
        });
    }


    this.updateJson = function (obj, cb) {
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



function datepickerConfig($mdDateLocaleProvider) {
    $mdDateLocaleProvider.firstDayOfWeek = 1;
}