namespace MyApp.Controllers {

    class HomeController {

        public cars;


        public showModal(id: number) {
            this.$modal.open({
                templateUrl: '/ngApp/modal.html',
                size:'sm',
                controller: DialogController,
                controllerAs: 'modal',
                resolve: {
                    id: () => id
                }
            });

        }

        constructor(private $modal: angular.ui.bootstrap.IModalService, carService: MyApp.Services.CarService) {
            carService.getCars().then((data) => {
                this.cars = data.data;
            })
        }

    }


    angular.module('MyApp').controller('HomeController', HomeController);


    class DialogController {
        public car;

        public ok() {
            this.$modalInstance.close();
        }


        constructor(private $modalInstance: angular.ui.bootstrap.IModalServiceInstance, id: number, carService: MyApp.Services.CarService) {
            carService.getCar(id).then((data) => {
                this.car = data.data;
            });
        }
    }

}