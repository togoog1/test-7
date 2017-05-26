var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.CarResource = $resource('/api/cars/:id');
                this.MakeResource = $resource('/api/makes');
            }
            CarService.prototype.getMatchingMakes = function (makeId) {
                return this.CarResource.query({ id: makeId });
            };
            CarService.prototype.getAllMakes = function () {
                return this.MakeResource.query();
            };
            CarService.prototype.listCars = function () {
                return this.CarResource.query();
            };
            CarService.prototype.getCar = function (carId) {
                return this.CarResource.get({ id: carId });
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('myapp').service('carService', CarService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
