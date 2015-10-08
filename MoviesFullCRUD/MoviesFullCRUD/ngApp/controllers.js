var MoviesApp;
(function (MoviesApp) {
    var Controllers;
    (function (Controllers) {
        var MovieListController = (function () {
            function MovieListController(movieService) {
                this.movies = movieService.listMovies();
            }
            return MovieListController;
        })();
        angular.module('MoviesApp').controller('MovieListController', MovieListController);
        var MovieAddController = (function () {
            function MovieAddController(movieService, $location) {
                this.movieService = movieService;
                this.$location = $location;
            }
            MovieAddController.prototype.addMovie = function () {
                var _this = this;
                this.movieService.save(this.movieToCreate).then(function () {
                    _this.$location.path('/');
                });
            };
            return MovieAddController;
        })();
        angular.module('MoviesApp').controller('MovieAddController', MovieAddController);
        var MovieDeleteController = (function () {
            function MovieDeleteController(movieService, $location, $routeParams) {
                this.movieService = movieService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.movieToDelete = this.movieService.getMovie($routeParams['id']);
            }
            MovieDeleteController.prototype.deleteMovie = function () {
                var _this = this;
                this.movieService.deleteMovie(this.$routeParams['id']).then(function () {
                    _this.$location.path('/');
                });
            };
            return MovieDeleteController;
        })();
        angular.module('MoviesApp').controller('MovieDeleteController', MovieDeleteController);
        var MovieEditController = (function () {
            function MovieEditController(movieService, $routeParams, $location) {
                this.movieService = movieService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.movieToEdit = this.movieService.getMovie($routeParams['id']);
            }
            MovieEditController.prototype.editMovie = function () {
                var _this = this;
                this.movieService.save(this.movieToEdit).then(function () {
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
//# sourceMappingURL=controllers.js.map