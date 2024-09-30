const inquirer = require('inquirer');
const Car = require('./Car.js');
const Truck = require('./Truck.js');
const Motorbike = require('./Motorbike.js');

class CLI {
    constructor(vehicles) {
        this.vehicles = vehicles;
        this.selectedVehicleVin = '';
        this.exit = false;
    }

    static generateVIN() {
        return `VIN-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
    }

    async chooseVehicle() {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on:',
                choices: this.vehicles.map(vehicle => ({
                    name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                    value: vehicle.vin,
                })),
            },
        ]);

        this.selectedVehicleVin = answer.selectedVehicleVin;
        this.performActions();
    }

    async createVehicle() {
        const { vehicleType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type:',
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ]);

        if (vehicleType === 'Car') {
            await this.createCar();
        } else if (vehicleType === 'Truck') {
            await this.createTruck();
        } else if (vehicleType === 'Motorbike') {
            await this.createMotorbike();
        }
    }

    async createCar() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'color', message: 'Enter Color' },
            { type: 'input', name: 'make', message: 'Enter Make' },
            { type: 'input', name: 'model', message: 'Enter Model' },
            { type: 'input', name: 'year', message: 'Enter Year' },
            { type: 'input', name: 'weight', message: 'Enter Weight' },
            { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        ]);

        const car = new Car(
            CLI.generateVIN(),
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
        );

        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
    }

    async createTruck() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'color', message: 'Enter Color' },
            { type: 'input', name: 'make', message: 'Enter Make' },
            { type: 'input', name: 'model', message: 'Enter Model' },
            { type: 'input', name: 'year', message: 'Enter Year' },
            { type: 'input', name: 'weight', message: 'Enter Weight' },
            { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        ]);

        const truck = new Truck(
            CLI.generateVIN(),
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
        );

        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
    }

    async createMotorbike() {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'color', message: 'Enter Color' },
            { type: 'input', name: 'make', message: 'Enter Make' },
            { type: 'input', name: 'model', message: 'Enter Model' },
            { type: 'input', name: 'year', message: 'Enter Year' },
            { type: 'input', name: 'weight', message: 'Enter Weight' },
            { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        ]);

        const motorbike = new Motorbike(
            CLI.generateVIN(),
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
        );

        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
    }

    performActions() {
        
    }
}

module.exports = CLI