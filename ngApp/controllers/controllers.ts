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
          this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
        console.log(this.matchingMakes);

        }


        constructor(private carService: myapp.Services.CarService, private $uibModal: angular.ui.bootstrap.IModalService, public $http) {
            this.cars = this.carService.listCars();
            this.makes = this.carService.getAllMakes();


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



        public showModal(car) {
             this.$uibModal.open({
                 templateUrl: '/ngApp/views/modal.html',
                 controller: 'DialogController',
                 controllerAs: 'modal',
                 resolve: {
                      car: () => car
                 },
                 size: 'lg'
             });
         }
}
angular.module('myapp').controller('HomeController', HomeController);






//modal service
class DialogController {
    public ok() {
        this.$uibModalInstance.close();
}
    constructor(public car:number, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
}
//end
angular.module('myapp').controller('DialogController', DialogController);

















//about controller
  export class AboutController {
        public message = 'Hello from the about page!';
   }
//end bracket
}
