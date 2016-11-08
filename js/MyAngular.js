(function(angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate'])
        .controller('myController', AppController)
        .controller('hourcounterController', hourcounterController)
        .controller('addHoursController', addHoursController)
        .config(['$routeProvider', RouteController]);

    function RouteController($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "all.html"
            })
            .when("/favorite", {
                templateUrl: "favorite.html"
            })
            .when("/all", {
                templateUrl: "all.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            })
            .when("/item/hourcounter", {
                templateUrl: "items/hourcounter.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            });
    }

    function AppController($scope, $mdDialog, $timeout, $mdSidenav) {

        $scope.showDialog = showDialog;
        $scope.goBack = function() {
            window.history.back();
        };

        sidebarJson.onload = function() {
            $scope.sidebarMenu = JSON.parse(this.responseText);
        };

        tilesJson.onload = function() {
            $scope.items = JSON.parse(this.responseText);
        };

        tempJson.onload = function() {
            $scope.worked = JSON.parse(this.responseText);
        };

        $scope.currentContent = 'all';
        $scope.favorite = [];
        $scope.addFav = function(item) {
            if ($.inArray(item, $scope.favorite)) {
                console.log("item is in");
                $scope.favorite = $.grep($scope.favorite, function(n) {
                    return (n !== item);
                });
            } else {
                console.log("added item");
                $scope.favorite.push(item);
            }
        };
        $scope.toggleSidebar = function() {
            $mdSidenav('sidebar').toggle();
        };
        $scope.closeSidebar = function() {
            $mdSidenav('sidebar').close();
        };
        $scope.changeContent = function(view) {
            $scope.currentContent = view;
        };

        function showDialog($event, title, filename) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'dialog/master.html',
                clickOutsideToClose: true,
                escapeToClose: true,
                fullscreen: true, // Only for -xs, -sm breakpoints.
                locals: {
                    title: title,
                    filename: filename
                },
                controller: DialogController
            });

            function DialogController($scope, $mdDialog, title, filename) {
                $scope.title = title;
                $scope.filename = filename;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
    }

    function hourcounterController($scope) {

    }

    function addHoursController($scope) {
        $scope.startTimes = ["09:30", "12:00", "17:00"];
        $scope.endTimes = ["17:00", "17:30", "21:00"];
    }
})(angular);

function filePath(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].filename = "items/" + items[i].filename + ".temp.html";
    }

    return items;
}
