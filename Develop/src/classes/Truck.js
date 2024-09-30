"use strict";

// Define the Vehicle class
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

    // Method to print vehicle details
    printDetails() {
        console.log(`Vehicle Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Top Speed: ${this.topSpeed} km/h`);
    }
}

// Define the Wheel class (if not already defined elsewhere)
class Wheel {
    constructor(size, type) {
        this.size = size;
        this.type = type;
    }
}

// Define the AbleToTow interface (as an object template, JavaScript doesn't have native interfaces)
const AbleToTow = {
    towingCapacity: 0,
    tow: function(vehicle) {}
};

// Define the Truck class extending Vehicle and implementing AbleToTow
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels = []) {
        super(vin, color, make, model, year, weight, topSpeed);  // Call parent class constructor
        this.towingCapacity = towingCapacity;  // Initialize towing capacity
        this.wheels = wheels.length === 4 ? wheels : [new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default'), new Wheel(17, 'Default')];  // Default to 4 wheels if not provided
    }

    // Implement the tow method from AbleToTow interface
    tow(vehicle) {
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Towing ${vehicle.make} ${vehicle.model} (${vehicle.year}) successfully.`);
        } else {
            console.log(`Cannot tow ${vehicle.make} ${vehicle.model} (${vehicle.year}), it exceeds towing capacity.`);
        }
    }

    // Override printDetails method from Vehicle
    printDetails() {
        super.printDetails();  // Call parent class method to print vehicle details
        console.log(`Truck Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Towing Capacity: ${this.towingCapacity}kg`);
    }
}

// Export the Truck class using CommonJS
module.exports = Truck;