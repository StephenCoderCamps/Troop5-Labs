namespace MyApp {

    angular.module('myApp', ['ngRoute']).config(function ($routeProvider: ng.route.IRouteProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "ngApps/ngViews/home.html",
                controller: HomeController,
                controllerAs: "vm"
            })
            .when('/cars', {
                templateUrl: "ngApps/ngviews/cars.html",
                controller: CarsController,
                controllerAs: "vm"
            })
            .otherwise('/');
    });
}