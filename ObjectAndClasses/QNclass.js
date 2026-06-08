let DATA = "Secret Information";
class user{
    constructor(name , email){
        this.fullName = name;
        this.email = email;
    }
    viewData(){
        console.log("You can view the data");
    }
}
class admin extends user{
    constructor(name , email , role){
        super(name , email , role);
        this.role = role;
    }
    editData(){
        console.log("You can edit the website data");
        DATA = "New Value updated"
    }
}
let student1 = new user("Aayus Regmi" , "aayusregmi721@gmai;,com");
let student2 = new user("Dipesh Subedi" , "dipeshsubedi322@gmail.com");
let admin1 = new admin("Shamrat Regmi" , "shamratregmi10@gmail.com" , "Frontend Developer");
let admin2 = new admin("Shakriyata Regmi" , "shakriyataregmi800@gmail.com" , "Backend Developer");

