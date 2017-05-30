var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search/';
        var HomeController = (function () {
            function HomeController(carService, $uibModal, $http) {
                this.carService = carService;
                this.$uibModal = $uibModal;
                this.$http = $http;
                this.selectedMake = 0;
                this.cars = this.carService.listCars();
                this.makes = this.carService.getAllMakes();
            }
            HomeController.prototype.getMatchingMakes = function () {
                this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
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
            HomeController.prototype.showModal = function (animalName) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modal.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        animalName: function () { return animalName; }
                    },
                    size: 'sm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('myapp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(animalName, $uibModalInstance) {
                this.animalName = animalName;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('myapp').controller('DialogController', DialogController);
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
