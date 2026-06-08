class toyotaCar {
    constructor(brand , mileage){
        console.log("Creating New Object");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start (){
        console.log("Start");
    }
    
    stop (){
        console.log("Stop");
    }

}

let fortuner = new toyotaCar("aayus" , 30);
fortuner.brandName = "anju"
console.log(fortuner);
// fortuner.start();
// fortuner.stop();
let lexus = new toyotaCar("jivan" , 50);
console.log(lexus);

//<----------Inhertiance----------> the properties and method from the parent class are inherited to the child class
class person {
    constructor(name){
        this.species = "Homo Sapiens";
        this.name = name; 
        
    }
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Depend");
    }
}
class engineer extends person {
    constructor(branch){
       
          super(branch); //to envoke the parent class constructor
          this.branchName = branch;
          
    }
    work(){
        super.eat();
        console.log("Coding , Debugging");
    }
}
let employee1 = new engineer("Csit");
employee1.eat();
employee1.sleep();
employee1.work();
