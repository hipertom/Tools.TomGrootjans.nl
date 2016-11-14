function AppController($scope, $mdDialog, $timeout, $mdSidenav, $http) {

        $scope.showDialog = showDialog;
        $scope.goBack = function() {
            window.history.back();
        };

        $http.get(sidebarURL)
            .then(function(response) {
                $scope.sidebarMenu = response.data;
            });
        $http.get(tilesURL)
            .then(function(response) {
                $scope.items = response.data;
            });

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