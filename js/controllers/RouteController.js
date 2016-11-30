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
            .when("/account", {
                templateUrl: "account.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            })
            .when("/login", {
                templateUrl: "login.html"
            });
    }