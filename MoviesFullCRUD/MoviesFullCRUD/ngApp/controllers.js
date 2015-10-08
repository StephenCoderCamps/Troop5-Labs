var MoviesApp;
(function (MoviesApp) {
    var Controllers;
    (function (Controllers) {
        //const movieServiceUrl = 'http://MoviesWebAPIApp.azurewebsites.net/api/movies/:id';
        //const authenticateURL = 'http://MoviesWebAPIApp.azurewebsites.net/Token';
        var MovieListController = (function () {
            function MovieListController(productService, $resource, movieServiceUrl) {
                this.$resource = $resource;
                var MovieResource = $resource(movieServiceUrl);
                this.movies = MovieResource.query();
                this.taxAmount = productService.calculateTax(120000);
            }
            return MovieListController;
        })();
        angular.module('MoviesApp').controller('MovieListController', MovieListController);
        var MovieAddController = (function () {
            function MovieAddController(movieServiceUrl, $resource, $location) {
                this.$resource = $resource;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
            }
            MovieAddController.prototype.addMovie = function () {
                var _this = this;
                this.MovieResource.save(this.movieToCreate).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MovieAddController;
        })();
        angular.module('MoviesApp').controller('MovieAddController', MovieAddController);
        var MovieDeleteController = (function () {
            function MovieDeleteController(movieServiceUrl, $routeParams, $resource, $location) {
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
                this.movieToDelete = this.MovieResource.get({ id: $routeParams['id'] });
            }
            MovieDeleteController.prototype.deleteMovie = function () {
                var _this = this;
                this.MovieResource.delete({ id: this.$routeParams['id'] }).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MovieDeleteController;
        })();
        angular.module('MoviesApp').controller('MovieDeleteController', MovieDeleteController);
        var MovieEditController = (function () {
            function MovieEditController(movieServiceUrl, $routeParams, $resource, $location) {
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
                this.movieToEdit = this.MovieResource.get({ id: $routeParams['id'] });
            }
            MovieEditController.prototype.editMovie = function () {
                var _this = this;
                this.MovieResource.save(this.movieToEdit).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MovieEditController;
        })();
        angular.module('MoviesApp').controller('MovieEditController', MovieEditController);
        var AccountController = (function () {
            function AccountController(authenticateUrl, $http, $window, $location) {
                this.authenticateUrl = authenticateUrl;
                this.$http = $http;
                this.$window = $window;
                this.$location = $location;
            }
            AccountController.prototype.login = function () {
                var _this = this;
                var data = "grant_type=password&username=" + this.username + "&password=" + this.password;
                this.$http.post(this.authenticateUrl, data, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (result) {
                    _this.$window.sessionStorage.setItem('token', result.access_token);
                    _this.$location.path('/');
                }).error(function () {
                    _this.loginMessage = 'Invalid user name/password';
                });
            };
            AccountController.prototype.logout = function () {
                this.$window.sessionStorage.removeItem('token');
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('token');
            };
            return AccountController;
        })();
        angular.module('MoviesApp').controller('AccountController', AccountController);
    })(Controllers = MoviesApp.Controllers || (MoviesApp.Controllers = {}));
})(MoviesApp || (MoviesApp = {}));
