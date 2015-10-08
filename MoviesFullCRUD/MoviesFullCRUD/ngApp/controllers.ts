namespace MoviesApp.Controllers {


    class MovieListController {
        public movies;

        constructor(movieService: MoviesApp.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }


    angular.module('MoviesApp').controller('MovieListController', MovieListController);


    class MovieAddController {
        public movieToCreate;

        addMovie() {
            this.movieService.save(this.movieToCreate).then(() => {
                this.$location.path('/');
            });
        }

        constructor(private movieService: MoviesApp.Services.MovieService, private $location: ng.ILocationService) { }
    }

    angular.module('MoviesApp').controller('MovieAddController', MovieAddController);


    class MovieDeleteController {
        public movieToDelete;


        deleteMovie() {
            this.movieService.deleteMovie(this.$routeParams['id']).then(() => {
                this.$location.path('/');
            });
        }

        constructor
            (
            private movieService:MoviesApp.Services.MovieService,
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.movieToDelete = this.movieService.getMovie($routeParams['id']);
        }
    }

    angular.module('MoviesApp').controller('MovieDeleteController', MovieDeleteController);


   


    class MovieEditController {
        public movieToEdit;
  

        editMovie() {
            this.movieService.save(this.movieToEdit).then(() => {
                this.$location.path('/');
            });
        }

        constructor
            (
            private movieService: MoviesApp.Services.MovieService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
            ) {
            this.movieToEdit = this.movieService.getMovie($routeParams['id']);
        }
    }

    angular.module('MoviesApp').controller('MovieEditController', MovieEditController);


   






    class AccountController {
        username: string
        password: string
        loginMessage: string

        login() {
            let data = "grant_type=password&username=" + this.username + "&password=" + this.password;
            this.$http.post(this.authenticateUrl, data,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success((result: any) => {
                    this.$window.sessionStorage.setItem('token', result.access_token);
                    this.$location.path('/');
                }).error(() => {
                    this.loginMessage = 'Invalid user name/password';
                });
        }

        logout() {
            this.$window.sessionStorage.removeItem('token');
        }

        isLoggedIn() {
            return this.$window.sessionStorage.getItem('token');
        }

        constructor(private authenticateUrl:string, private $http: ng.IHttpService, private $window: ng.IWindowService, private $location: ng.ILocationService) { }
    }

    angular.module('MoviesApp').controller('AccountController', AccountController);


}