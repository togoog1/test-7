namespace myapp.Services {

    export class CarService {
        public CarResource;

        public listCars() {
            return this.CarResource.query();
        }

        public getCar(carId) {
            return this.CarResource.get({id: carId});
        }

        public constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars/:id');
        }
    }

    angular.module('myapp').service('carService', CarService);


    export class MakeService {
        public MakeResource;

        public getMatchingMakes(makeId) {
            return this.MakeResource.query({id: makeId});
        }

        public listAllMakes() {
            return this.MakeResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MakeResource = $resource('/api/makes');
        }
    }

    angular.module('myapp').service('makeService', MakeService);

}
