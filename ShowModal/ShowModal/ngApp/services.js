var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($http) {
                this.$http = $http;
            }
            CarService.prototype.getCars = function () {
                return this.$http.get('http://codercamps-cardealershipapi.azurewebsites.net/api/cars');
            };
            CarService.prototype.getCar = function (id) {
                return this.$http.get('http://codercamps-cardealershipapi.azurewebsites.net/api/cars/' + id);
            };
            return CarService;
        })();
        Services.CarService = CarService;
        angular.module('MyApp').service('carService', CarService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
