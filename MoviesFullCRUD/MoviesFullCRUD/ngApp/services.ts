namespace MoviesApp.Services {


    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        public save(movie) {
            return this.MovieResource.save(movie).$promise;
        }

        public getMovie(id) {
            return this.MovieResource.get({id:id});
        }

        public deleteMovie(id: number) {
            return this.MovieResource.delete({ id: id }).$promise;
        }

        constructor(movieServiceUrl:string, $resource: ng.resource.IResourceService) {
            this.MovieResource = $resource(movieServiceUrl);
        }
    }

    angular.module('MoviesApp').service('movieService', MovieService);




    export class ProductService {

        public calculateTax(price:number) {
            return price * .08;
        }
    }


    angular.module('MoviesApp').service('productService', ProductService);

}