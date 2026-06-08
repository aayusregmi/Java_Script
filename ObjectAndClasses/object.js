const employee = {
    callTax() {
        console.log("Tax rate is 10%");
    }
};

const batman = {
    salary : 100000,
    callTax (){
        console.log("Tax rate is 20%");
    }
    
}
 batman.__proto__ = employee;