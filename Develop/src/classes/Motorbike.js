"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Vehicle = require('./Vehicle'); 
const Wheel = require('./Wheel');

class Motorbike extends Vehicle {
  
  constructor(vin, color, make, model, year, weight, topSpeed) {
   
    super(vin, color, make, model, year, weight, topSpeed);
   
    this.wheels = this.wheels.length === 2 ? this.wheels : [new Wheel(17, 'Default'), new Wheel(17, 'Default')];
  }

  wheelie() {
    console.log(`${this.make} ${this.model} is doing a wheelie!`);
  }

  printDetails() {
    super.printDetails(); 
    console.log(`Motorbike Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Wheels: ${this.wheels.length}`);
  }
}

module.exports = Motorbike;