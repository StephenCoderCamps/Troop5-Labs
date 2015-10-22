namespace MyApp.Controllers {

    export class HomeController {
       
        public movies;

        constructor(movieService: MyApp.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }


    export class AddController {
        public movieToAdd;

        public save() {
            this.movieService.save(this.movieToAdd).then(() => {
                this.$location.path('/');
            });
        }

        constructor(
            private movieService: MyApp.Services.MovieService,
            private $location: angular.ILocationService
        ) { }

    }


    export class EditController {
        public movieToEdit;

        public save() {
            this.movieService.save(this.movieToEdit).then(() => {
                this.$location.path('/');
            });
        }

        constructor(
            private movieService: MyApp.Services.MovieService,
            private $location: angular.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        )
        {
            this.movieToEdit = this.movieService.get($routeParams['id']);
        }

    }


    export class DeleteController {
        public movieToDelete;

        public remove() {
            this.movieService.remove(this.movieToDelete.id).then(() => {
                this.$location.path('/');
            });
        }

        constructor(
            private movieService: MyApp.Services.MovieService,
            private $location: angular.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.movieToDelete = this.movieService.get($routeParams['id']);
        }

    }



    export class AboutController {

    }
}