//inhertance and method overriding.
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
//user is another class has parent
class website extends User{

    //creating a constructor
    constructor(fistname, lastname, credit, subject){
        //we need a super method to use parent properties
        super(fistname, lastname, credit);
        this.subject = subject;
    }

    //creating a method in class
    //here we are method overriding from class user
    getfullName(){
        let fullname = `${this.fistname} ${this.lastname} is my full name , i like  ${this.subject} `
        return fullname;
    }
}

//creating a oject this class
const call = new website("jhon", "ram", 19, "sports")

console.log(call.getfullName());
