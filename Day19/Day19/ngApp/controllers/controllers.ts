namespace MyApp.Controllers {

    export class HomeController {
        private MovieResource;
        public categories;

        constructor($resource: angular.resource.IResourceService) {
            this.MovieResource = $resource('/api/categories/:id');
            this.categories = this.MovieResource.query();
        }
    }


    export class AboutController {

    }
}