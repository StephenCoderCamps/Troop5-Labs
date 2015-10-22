namespace MyApp.Services {


    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        public save(movie) {
            return this.MovieResource.save(movie).$promise;
        }

        public get(id) {
            return this.MovieResource.get({ id: id });
        }

        public remove(id) {
            return this.MovieResource.remove({ id: id }).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies/:id');
        }

    }


    angular.module('MyApp').service('movieService', MovieService);


}