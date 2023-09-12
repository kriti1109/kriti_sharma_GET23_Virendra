class Vehicle{
    #capacity=0;
    constructor(name,capacity){
        this.name=name;
        this.#capacity=capacity;
    }
    get capacityV(){
        return this.#capacity;
    }
    set capacityV(capacity){
        this.#capacity=capacity;
    }
    startEngine(){
        console.log(`${this.name} can start and has capacity of ${this.#capacity}`);
    }
    stopEngine(){
        console.log(`${this.name} can stop and has capacity of ${this.#capacity}`);
    }
    run(){
        console.log(`${this.name} can run on manual mode`);
    }

    static brake(){
        console.log("We are calling static method");
    }
    callCapacity(){
        console.log(`${this.name} has this much ${this.#capacity} capacity`);
    }

}

class Vehicle_2W extends Vehicle{
    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre=tyre;
        this.engine=engine;
    }
}

class Vehicle_3W extends Vehicle{
    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre=tyre;
        this.engine=engine;
    }
}

let vehicle2= new Vehicle_2W('Splender',4000,2,3000);
let vehicle3= new Vehicle_3W('Auto',4000,3,6000);

console.log(`${vehicle2.name} : ${vehicle2.capacityV}W ${vehicle2.tyre} tyre ${vehicle2.engine}cc`);
console.log(`${vehicle3.name} : ${vehicle3.capacityV}W ${vehicle3.tyre} tyre ${vehicle3.engine}cc`);
vehicle2.startEngine();
vehicle2.stopEngine();
vehicle2.run();
vehicle2.callCapacity();
Vehicle.brake();