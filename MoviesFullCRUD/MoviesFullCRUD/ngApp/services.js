var MoviesApp;
(function (MoviesApp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService(movieServiceUrl, $resource) {
                this.MovieResource = $resource(movieServiceUrl);
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            MovieService.prototype.save = function (movie) {
                return this.MovieResource.save(movie).$promise;
            };
            MovieService.prototype.getMovie = function (id) {
                return this.MovieResource.get({ id: id });
            };
            MovieService.prototype.deleteMovie = function (id) {
                return this.MovieResource.delete({ id: id }).$promise;
            };
            return MovieService;
        })();
        Services.MovieService = MovieService;
        angular.module('MoviesApp').service('movieService', MovieService);
        var ProductService = (function () {
            function ProductService() {
            }
            ProductService.prototype.calculateTax = function (price) {
                return price * .08;
            };
            return ProductService;
        })();
        Services.ProductService = ProductService;
        angular.module('MoviesApp').service('productService', ProductService);
    })(Services = MoviesApp.Services || (MoviesApp.Services = {}));
})(MoviesApp || (MoviesApp = {}));
//# sourceMappingURL=services.js.map