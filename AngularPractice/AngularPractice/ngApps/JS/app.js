var MyApp;
(function (MyApp) {
    angular.module('myApp', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: "ngApps/ngViews/home.html",
            controller: MyApp.HomeController,
            controllerAs: "vm"
        })
            .when('/cars', {
            templateUrl: "ngApps/ngviews/cars.html",
            controller: MyApp.CarsController,
            controllerAs: "vm"
        })
            .otherwise('/');
    });
})(MyApp || (MyApp = {}));
