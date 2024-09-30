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

class Motorbike extends Vehicle {
    wheels: Wheel[]; 

    
    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[] = []) {
        
        super(vin, color, make, model, year, weight, topSpeed);

        
        this.wheels = wheels.length === 2 ? wheels : [new Wheel(15, 'Default'), new Wheel(15, 'Default')];
    }

    
    wheelie(): void {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }


    override printDetails(): void { 
        super.printDetails();
        console.log(`Motorbike Details - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg`);
    }
}


export default Motorbike;