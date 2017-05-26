namespace myapp.Services {

    export class CarService {
        public CarResource;
        public MakeResource;



        public getMatchingMakes(makeId) {
            return this.CarResource.query({id: makeId});
        }

        public getAllMakes() {
        return this.MakeResource.query();
      }


        public listCars() {
            return this.CarResource.query();
        }

        public getCar(carId) {
            return this.CarResource.get({id: carId});
        }

        public constructor(public $resource) {
            this.CarResource = $resource('/api/cars/:id');
            this.MakeResource = $resource('/api/makes');
        }


}
    angular.module('myapp').service('carService', CarService);


  //  export class MakeService {
      //  public MakeResource;

      //  public getMatchingMakes(makeId) {
        //    return this.MakeResource.query({id: makeId});
      //  }

      //  public listAllMakes() {
    //        return this.MakeResource.query();
    //    }

  //      constructor($resource: ng.resource.IResourceService) {
//            this.MakeResource = $resource('/api/makes');
  //      }
//    }

//    angular.module('myapp').service('makeService', MakeService);

//}

//:ng.resource.IResourceService

}
