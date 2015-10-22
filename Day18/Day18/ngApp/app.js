var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .when('/about', {
            templateUrl: '/ngApp/views/about.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .when('/add', {
            templateUrl: '/ngApp/views/add.html',
            controller: MyApp.Controllers.AddController,
            controllerAs: 'controller'
        })
            .when('/edit/:id', {
            templateUrl: '/ngApp/views/edit.html',
            controller: MyApp.Controllers.EditController,
            controllerAs: 'controller'
        })
            .when('/delete/:id', {
            templateUrl: '/ngApp/views/delete.html',
            controller: MyApp.Controllers.DeleteController,
            controllerAs: 'controller'
        })
            .otherwise({
            templateUrl: '/ngApp/views/notFound.html'
        });
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map