namespace MyApp {

    export class HomeController {
        public cars;
        public name;

        constructor(private $http: ng.IHttpService) {
            this.name = "Super Awesome";
            this.getCars();
        }

        getCars() {
            this.$http.get("http://codercamps-cardealershipapi.azurewebsites.net/api/cars")
                .success((movies) => {
                    console.log(movies);
                    this.cars = movies;
                })
                .error((error) => {

                });
        }

    }
}