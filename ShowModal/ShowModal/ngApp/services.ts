namespace MyApp.Services {


    export class CarService {

        public getCars() {
            return this.$http.get('http://codercamps-cardealershipapi.azurewebsites.net/api/cars');
        }

        public getCar(id: number) {
            return this.$http.get('http://codercamps-cardealershipapi.azurewebsites.net/api/cars/' + id);
        }

        constructor(private $http: angular.IHttpService) {
        }
    }

    angular.module('MyApp').service('carService', CarService);

}