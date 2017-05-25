namespace myapp.Controllers {

const apiUrl = '/api/cars/search/';

    export class HomeController {
        public cars;
        public makes;
        public makeId;
        public carId;
        public selectedMake = 0;
        public selectedModel;
        public search;
        public matchingMakes;

        public getMatchingMakes() {
          this.matchingMakes = this.makeService.getMatchingMakes(this.makeId);
        console.log(this.matchingMakes);

        }


        constructor(private carService: myapp.Services.CarService, private makeService: myapp.Services.MakeService, private $uibModal: angular.ui.bootstrap.IModalService, public $http) {
            this.cars = this.carService.listCars();
            this.makes = this.makeService.listAllMakes();
            //this.$http.get('/api/cars')
                        //  .then((response) => {
                          //    this.cars = response.data;
                        //  })

        }


        public getCars() {
            if (this.selectedMake == 0)
                return this.cars
            else
                return this.cars.filter(x => x.carMakeId == this.selectedMake);
        }



public fetch() {
  console.log(apiUrl+this.search)
      this.$http.get(apiUrl + this.search).then((res) => {
      //  console.log(res);
     this.cars = res.data;
      });

    }


}

      //  public showModal(carId) {

          //  showModalUI(carId, this.$uibModal, this.cars, this.makes)
      //  }
  //  }








//modal
//    class DialogController {

//        public ok() {
    //        this.$uibModalInstance.close();
//        }

  //      constructor(public make: string, public car: object, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
//    }
//
//    angular.module('myapp').controller('DialogController', DialogController);


//    angular.module('myapp').config(['$qProvider', function ($qProvider) {
//        $qProvider.errorOnUnhandledRejections(false);
//    }]);

  //  const apiUrl = '/api/cars/search/';











  export class AboutController {
        public message = 'Hello from the about page!';
   }




    //export function showModalUI(carId: number, $uibModal: angular.ui.bootstrap.IModalService, cars, makes) {

        //let car = cars.find(x => ;;== carId);
        //let make = makes.find(x => ;;== car.carMakeId);

      //  $uibModal.open({
    //        templateUrl: '/ngApp/views/modal.html',
  //          controller: 'DialogController',
  //          controllerAs: 'modal',
  //          resolve: {
  //              car: () => car,
  //              make: () => make.name
  //          },
  //          size: 'lg'
  //      });
//    }

}
