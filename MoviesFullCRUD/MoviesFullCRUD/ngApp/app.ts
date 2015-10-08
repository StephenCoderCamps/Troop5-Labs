

namespace MoviesApp {

    angular.module('MoviesApp', ['ngRoute', 'ngResource']).config((
        $locationProvider: ng.ILocationProvider,
        $routeProvider: ng.route.IRouteProvider
    ) => {

        $routeProvider
            .when('/', {
                templateUrl: '/ngApp/home.html',
                controller: 'MovieListController as vm'
            })
            .when('/login', {
                templateUrl: '/ngApp/login.html'
            })
            .when('/add', {
                templateUrl: '/ngApp/add.html',
                controller: 'MovieAddController as vm'
            })
            .when('/delete/:id', {
                templateUrl: '/ngApp/delete.html',
                controller: 'MovieDeleteController as vm'
            })
            .when('/edit/:id', {
                templateUrl: '/ngApp/edit.html',
                controller: 'MovieEditController as vm'
            });


        $locationProvider.html5Mode(true);

    })
        .constant('movieServiceUrl', 'http://MoviesWebAPIApp.azurewebsites.net/api/movies/:id')
        .constant('authenticateUrl', 'http://MoviesWebAPIApp.azurewebsites.net/Token');


    angular.module('MoviesApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('MoviesApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });;



}