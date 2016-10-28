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
        $scope.sidebarMenu = sidebarMenu;
        $scope.currentContent = 'all';
        $scope.items = items;
        $scope.toggleSidebar = function() {
            $mdSidenav('sidebar').toggle();
        }
        $scope.closeSidebar = function() {
            $mdSidenav('sidebar').close();
        }
        $scope.changeContent = function(view) {
            $scope.currentContent = view;
        }

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
        $scope.worked = worked;
    }

    function addHoursController($scope) {
        $scope.times = [9.30, 10.00, 10.30];
    }
})(angular);

function filePath(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].filename = "items/" + items[i].filename + ".temp.html";
    }

    return items;
}
