var MyApp;
(function (MyApp) {
    var CarsController = (function () {
        function CarsController() {
            alert("CarsController Actiated");
        }
        return CarsController;
    })();
    MyApp.CarsController = CarsController;
})(MyApp || (MyApp = {}));
