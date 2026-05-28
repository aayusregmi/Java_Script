console.log("Welcome to the journey Aayus Regmi!!!!");
let fullName = "Aayus Regmi";
fullName = "Regmi Aayus";      //let cannot be re-declared but can be updated|var can be re-declared and updated
console.log(fullName);
let x = null;
let y = undefined;
console.log(x);
let isHancy = true;
console.log(isHancy);
let a;
a = 100;        //let can be declared and later on we can initalized it when wee want

{
    let b = 50;
    console.log(b);
}                          
//let is the block scope variable we can use it as in the example
{
    let b = 30;
    console.log(b);
}

//constant ---> its value now cannot be re-declared and updated.

const PI = 3.14;   //it must be declared and initialized at the same time
//PI = 3.01;           yeha tah error dekhaaudaina tara console section maa we can see error
console.log(PI);

//BigInt datatype
let z = BigInt("123");
console.log(z);
let w = 12378945n;
console.log(typeof w);

//symbol
let g = Symbol("Green House!!!");
console.log(g);
console.log(typeof g);

//object
const student = {
    Name : "Aayus Regmi",
    age : 19,
    GPA : 3.81,
    Campus : "Patan multiple Campus",
    ispass : true
}
console.log(student);
console.log(student.Name);     //to access the key of the object
console.log(student.age);
student.age = student.age + 2;  //i assigned the new value to object
console.log(student.age);
student.name = "Shamrat Regmi";
console.log(student.name);