var MyApp;
(function (MyApp) {
    var HomeController = (function () {
        function HomeController($http) {
            this.$http = $http;
            this.name = "Super Awesome";
            this.getCars();
        }
        HomeController.prototype.getCars = function () {
            var _this = this;
            this.$http.get("http://codercamps-cardealershipapi.azurewebsites.net/api/cars")
                .success(function (movies) {
                console.log(movies);
                _this.cars = movies;
            })
                .error(function (error) {
            });
        };
        return HomeController;
    })();
    MyApp.HomeController = HomeController;
})(MyApp || (MyApp = {}));
