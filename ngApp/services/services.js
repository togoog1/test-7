var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.CarResource = $resource('/api/cars/:id');
            }
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
        var MakeService = (function () {
            function MakeService($resource) {
                this.MakeResource = $resource('/api/makes');
            }
            MakeService.prototype.getMatchingMakes = function (makeId) {
                return this.MakeResource.query({ id: makeId });
            };
            MakeService.prototype.listAllMakes = function () {
                return this.MakeResource.query();
            };
            return MakeService;
        }());
        Services.MakeService = MakeService;
        angular.module('myapp').service('makeService', MakeService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
