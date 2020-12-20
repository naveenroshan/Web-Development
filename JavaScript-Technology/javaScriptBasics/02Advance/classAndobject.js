//creating a class with "class" keyword
class User{
    //creating a constructor with parameter
    constructor(fistname, lastname, credit){
        this.fistname = fistname;
        this.lastname = lastname;
        this.credit = credit;
    }

    //creating a method in class
    getfullName(){
        let fullname = `${this.fistname} ${this.lastname} is my full name`
        return fullname;
    }

    //creating a second method
    editName(newname){
       const myname = newname.split(" ");
       this.fistname = myname[0];
       this.lastname = myname[1]
    }
}

//creating objecr for the class with "new" keyword and it is paramatreised
const call = new User("jhon", "man", 34);
//console.log(call);

//call the get method
console.log(call.getfullName());

//call the edit method
call.editName("ram ravi");  
console.log(call.getfullName());


