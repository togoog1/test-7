var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search/';
        var HomeController = (function () {
            function HomeController(carService, makeService, $uibModal, $http) {
                this.carService = carService;
                this.makeService = makeService;
                this.$uibModal = $uibModal;
                this.$http = $http;
                this.selectedMake = 0;
                this.cars = this.carService.listCars();
                this.makes = this.makeService.listAllMakes();
            }
            HomeController.prototype.getMatchingMakes = function () {
                this.matchingMakes = this.makeService.getMatchingMakes(this.makeId);
                console.log(this.matchingMakes);
            };
            HomeController.prototype.getCars = function () {
                var _this = this;
                if (this.selectedMake == 0)
                    return this.cars;
                else
                    return this.cars.filter(function (x) { return x.carMakeId == _this.selectedMake; });
            };
            HomeController.prototype.fetch = function () {
                var _this = this;
                console.log(apiUrl + this.search);
                this.$http.get(apiUrl + this.search).then(function (res) {
                    _this.cars = res.data;
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
