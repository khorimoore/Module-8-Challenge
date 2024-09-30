"use strict";


class Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
    }

    
    printDetails() {
        console.log(`Vehicle Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Top Speed: ${this.topSpeed} km/h`);
    }
}

class Wheel {
    constructor(size, type) {
        this.size = size;
        this.type = type;
    }
}

const AbleToTow = {
    towingCapacity: 0,
    tow: function(vehicle) {}
};

class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels = []) {
        super(vin, color, make, model, year, weight, topSpeed);  
        this.towingCapacity = towingCapacity;  
        this.wheels = wheels.length === 4 ? wheels : [new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default')];  // Default to 4 wheels if not provided
    }

    tow(vehicle) {
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Towing ${vehicle.make} ${vehicle.model} (${vehicle.year}) successfully.`);
        } else {
            console.log(`Cannot tow ${vehicle.make} ${vehicle.model} (${vehicle.year}), it exceeds towing capacity.`);
        }
    }

    printDetails() {
        super.printDetails();  
        console.log(`Truck Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Towing Capacity: ${this.towingCapacity}kg`);
    }
};

it
module.exports = Truck