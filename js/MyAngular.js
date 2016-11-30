(function (angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngMessages', 'ngAria', ])
        .controller('myController', AppController)
        .controller('hourcounterController', WorkedHoursController)
        .controller('addHoursController', AddHoursController)
        .controller('loginController', LoginController)
        .service('workedService', WorkedServiceFun)
        .service('userService', UserService)
        .config(['$routeProvider', RouteController])
        .config(['$mdDateLocaleProvider', datepickerConfig])
        .constant('apiEndpoint', '/edsa-Tools.TomGrootjans.nl/api/')
        .run(function ($rootScope, $location) {

            // register listener to watch route changes
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if (!$rootScope.userStatus) {
                    // no logged user, we should be going to #login
                    if (next.templateUrl == "account.html") {
                        $location.path("/login");
                    } else {
                        
                    }
                }
            });
        });

})(angular);