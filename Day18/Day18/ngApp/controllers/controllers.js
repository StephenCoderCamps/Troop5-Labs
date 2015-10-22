var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.movies = movieService.listMovies();
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var AddController = (function () {
            function AddController(movieService, $location) {
                this.movieService = movieService;
                this.$location = $location;
            }
            AddController.prototype.save = function () {
                var _this = this;
                this.movieService.save(this.movieToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AddController;
        })();
        Controllers.AddController = AddController;
        var EditController = (function () {
            function EditController(movieService, $location, $routeParams) {
                this.movieService = movieService;
                this.$location = $location;
                this.movieToEdit = this.movieService.get($routeParams['id']);
            }
            EditController.prototype.save = function () {
                var _this = this;
                this.movieService.save(this.movieToEdit).then(function () {
                    _this.$location.path('/');
                });
            };
            return EditController;
        })();
        Controllers.EditController = EditController;
        var DeleteController = (function () {
            function DeleteController(movieService, $location, $routeParams) {
                this.movieService = movieService;
                this.$location = $location;
                this.movieToDelete = this.movieService.get($routeParams['id']);
            }
            DeleteController.prototype.remove = function () {
                var _this = this;
                this.movieService.remove(this.movieToDelete.id).then(function () {
                    _this.$location.path('/');
                });
            };
            return DeleteController;
        })();
        Controllers.DeleteController = DeleteController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map