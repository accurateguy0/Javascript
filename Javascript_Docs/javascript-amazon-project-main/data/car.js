class Car{
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
  }
  displayInfo(){
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h trunk opened: ${this.isTrunkOpen}`);
  }
  go(){
    if(this.speed<=200 && this.speed>=0){
      this.speed += 5;
    }
  }
  brake(){
    if(this.speed<=200 && this.speed>=0){
      this.speed -= 5;
    }
    
  }
  openTrunk(){
    if(!(this.speed > 0)){
      this.isTrunkOpen = true;
    }
  }
  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car{
  acceleration = 6;
  constructor(brand, model, acceleration){
    super(brand, model);
    this.acceleration = acceleration;
  }
  go(){
    if(this.speed<=300 && this.speed>=0){
      this.speed += this.acceleration;
    }
  }
  openTrunk(){
    return '';
  }
  closeTrunk(){
    return '';
  }
}

//{brand: 'Toyota', model: 'Corolla'};
//{brand: 'Tesla', model: 'Model 3'};
let car = new Car('Toyota','Corolla');
let car2 = new Car('Tesla','Model 3');
let car3 = new RaceCar('McLaren', 'F1', 20)
car.displayInfo();
car2.displayInfo();
car3.displayInfo();
car.openTrunk();
car.go();
car2.go();
car2.go();
car2.go();
car2.brake();
car.closeTrunk();
car.go();
car.go();
car.brake();
car2.brake();
car3.go();
car3.brake();
car3.closeTrunk();
car3.go();
car3.go();
car3.brake();
car.displayInfo();
car2.displayInfo();
car3.displayInfo();
