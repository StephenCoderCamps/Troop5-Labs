var MoviesApp;
(function (MoviesApp) {
    var Services;
    (function (Services) {
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
