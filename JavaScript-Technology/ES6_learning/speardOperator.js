const citrus = ["lime","lemon","orange"];
const fruit = ["Apple", ...citrus, "Banana", "Coconut"];
console.log(fruit);

const fullName = {
    fName:"jhon",
    lName:"bond"
}
const user = {
    ...fullName,
     NameOne: "ram",
     Name: "ravi"
}
console.log(user);

