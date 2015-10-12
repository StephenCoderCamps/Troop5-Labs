var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($modal, carService) {
                var _this = this;
                this.$modal = $modal;
                carService.getCars().then(function (data) {
                    _this.cars = data.data;
                });
            }
            HomeController.prototype.showModal = function (id) {
                this.$modal.open({
                    templateUrl: '/ngApp/modal.html',
                    size: 'sm',
                    controller: DialogController,
                    controllerAs: 'modal',
                    resolve: {
                        id: function () { return id; }
                    }
                });
            };
            return HomeController;
        })();
        angular.module('MyApp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController($modalInstance, id, carService) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                carService.getCar(id).then(function (data) {
                    _this.car = data.data;
                });
            }
            DialogController.prototype.ok = function () {
                this.$modalInstance.close();
            };
            return DialogController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
