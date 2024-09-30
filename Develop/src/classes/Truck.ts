
class Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number) {  
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year; 
      this.weight = weight;
      this.topSpeed = topSpeed;
  }

  printDetails(): void {
      console.log(`Vehicle Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Top Speed: ${this.topSpeed} km/h`);
  }
}

class Wheel {
  size: number;
  type: string;

  constructor(size: number, type: string) {
      this.size = size;
      this.type = type;
  }
}


interface AbleToTow {
  towingCapacity: number;
  tow(vehicle: Vehicle): void;
}

class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;
  wheels: Wheel[];

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, towingCapacity: number, wheels: Wheel[] = []) {
      super(vin, color, make, model, year, weight, topSpeed);  
      this.towingCapacity = towingCapacity;  
      this.wheels = wheels.length === 4 ? wheels : [new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default')];  // Default to 4 wheels if not provided
  }

  
  tow(vehicle: Vehicle): void {
      if (vehicle.weight <= this.towingCapacity){
        console.log(`Towing ${vehicle.make} ${vehicle.model} (${vehicle.year}) successfully. Towing capacity: ${this.towingCapacity}kg.`);
      } else {
          console.log(`Cannot tow ${vehicle.make} ${vehicle.model} (${vehicle.year}), it exceeds towing capacity.`);
      }
  }

  
  override printDetails(): void {
      super.printDetails();  
      console.log(`Truck Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Top Speed: ${this.topSpeed}km/h`);
  }
};


export default Truck