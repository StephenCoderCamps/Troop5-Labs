namespace MoviesApp.Services {

    export class ProductService {

        public calculateTax(price:number) {
            return price * .08;
        }
    }


    angular.module('MoviesApp').service('productService', ProductService);

}