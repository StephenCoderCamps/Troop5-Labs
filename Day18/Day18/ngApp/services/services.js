var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies/:id');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            MovieService.prototype.save = function (movie) {
                return this.MovieResource.save(movie).$promise;
            };
            MovieService.prototype.get = function (id) {
                return this.MovieResource.get({ id: id });
            };
            MovieService.prototype.remove = function (id) {
                return this.MovieResource.remove({ id: id }).$promise;
            };
            return MovieService;
        })();
        Services.MovieService = MovieService;
        angular.module('MyApp').service('movieService', MovieService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map