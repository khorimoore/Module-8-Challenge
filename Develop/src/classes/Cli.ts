import inquirer from 'inquirer';
import Truck from './Truck';
import Motorbike from './Motorbike';
import Car from './Car';

class Cli {
  vehicles: (Car | Truck | Motorbike)[] = [];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

 
  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on:',
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          
          this.createTruck(); 
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike(); 
        }
      });
  }
  

  createCar(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'wheels', message: 'Enter Number of Wheels' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topspeed', message: 'Enter Top Speed' },
      ])
      .then((answers) => {
        const car = new Car(
          answers.color,
          answers.make,
          answers.model,  
          answers.year,
          parseInt(answers.weight),
          parseInt(answers.wheels),
          parseInt(answers.topspeed),
           Cli.generateVin()
        );
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }

  
  createTruck(): void {
    
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topspeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity' },
      ])
      .then((answers) => {
        const truck = new Truck(
          answers.color,
          answers.make,
          answers.model,
          answers.year,

          parseInt(answers.weight),
          parseInt(answers.topspeed),
          parseInt(answers.towingCapacity),
          Cli.generateVin()
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }
  createMotorbike(): void {
    
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topspeed', message: 'Enter Top Speed' },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          answers.color,
          answers.make,
          answers.model,
          answers.year,
          parseInt(answers.weight),
          parseInt(answers.topspeed),
          Cli.generateVin()
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action to perform on the vehicle:',
          choices: ['Tow', 'Wheelie', 'Exit'],
        },
      ])
      .then((answers) => {
      
        if (answers.action === 'Tow' && this.getVehicleType() === 'Truck') {
         
          this.findVehicleToTow();
        }
        
        else if (answers.action === 'Wheelie' && this.getVehicleType() === 'Motorbike') {
          this.performWheelie();
        } else if (answers.action === 'Exit') {
          this.exit = true;
        } else {
          this.performActions();
        }
      });
  }

  
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
  findVehicleToTow(): void {
    
    console.log('Finding vehicle to tow...');
  }

  performWheelie(): void {
    
    console.log('Performing a wheelie...');
  }

  getVehicleType(): string | undefined {
    const selectedVehicle = this.vehicles.find(
      (vehicle) => vehicle.vin === this.selectedVehicleVin
    );
    if (selectedVehicle instanceof Truck) return 'Truck';
    if (selectedVehicle instanceof Motorbike) return 'Motorbike';
    if (selectedVehicle instanceof Car) return 'Car';
      return undefined;
  }
}

// Export the Cli class
export default Cli;