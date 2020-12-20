//import * as MathIM from './Math';
//import AnimalIM from './Animal';


/*----------------------------
logTitle('Data_and_Variables')

var person ={
  name: "Ram Ravi",
  age: 22,
  hasDriverLicence:true,
  dateOfBirth: "01/11/2019",
  address:{
    firstLine:"123",
    postCode:"se1",
    country:"England"
  }
};

log(JSON.stringify(person));

log(Object.values(person))

log(JSON.stringify(person.address))
-----------------------------*/
/*----------------------------
logTitle('Arrays')

var names = ["Alex", "jhon", "sam"];

log(names);

log(names[2]);

log(names.length);

for (var n of names){
  log(n);
}

names.forEach((item, i) => {
  log(i + " _ " + item)
});
--------------------------------*/
/*-------------------------------
logTitle('Arithemetic operators');

var addtion = 2 + 2;
var sub = 3 - 9;
var div = 10 / 5;
var mul = 10 * 3;
var remainder = 5 % 4;

log(addtion);
log(sub);
log(div);
log(mul);
log(remainder);
---------------------------------*/
/*--------------------------------
logTitle("Functions");

function addNumbers(numOne,numTwo){
  var result = numOne + numTwo
  return result;
}

var result = addNumbers(1,2);
log(result);

var person ={
  name:"anna",
  age:"20"
};
log(Object.keys(person));
log(Object.values(person));

log("Ram Kumar".toLowerCase());
log("Ram kumar".endsWith("kumar"));
---------------------------------*/
/*---------------------------------
logTitle("Loops")

for (var i=0; i<10; i++){
  log(i)
}

var cars =[
  { bmw:"m1", cost:1000 },
  { bmw:"a1",  cost:2000 }
];

for(var i = 0; i<= cars.length; i++ ){
  log(cars[i].bmw);
  log(cars[i].cost);
}

var num = 0;

while(num < 5){
  log(num);
  num ++;
}

var i = 0;

do {
  i++
  log(i)
} while (i<5);
---------------------------------*/
/*-----------------------------
logTitle("Break and continue");

var num = 0;

while(num < 5){
  log(num);
  if(num == 3){
    break;
  }
  num ++;
}

var num = 0;

while(num < 5){
  num++;

  if(num < 5){
    continue;
  }
  log(num);
}
-----------------------------*/
/*----------------------------
logTitle("If statement")

var cars ={
  cost: 10000
}

if (cars.cost <= 1000) {
  log("cheap car");
}
else if (cars.cost = 900) {
  log("very cheap");
 }
 else {
  log("costly car");
}
-----------------------------*/
/*-----------------------------
logTitle("Switch case")

var bike ={
  color: "greena"
}

switch (bike.color) {
  case "yellow":
  log("it yellow color");
  break;
  case "green":
  log("it green color");
  break;
  default:
    log("non of the above");
}

var todayDate = new Date().getDate();
switch (todayDate) {
  case 10:
    log("is correct")
    break;
  default:
    log("its wrong")
}
------------------------------------*/
/*-----------------------------------
logTitle("Comparison and  logical")

log("Comparison")
log(10 == 10);
log(10 < 10);
log(10 > 10);
log(10 <= 10);
log(10 >= 10);
log(10 != 10);

log("logical")
log(10 == 10 && 10 == 10);
log(10 == 10 || 1 == 10);
log(!(10 == 10));
-------------------------------------*/
/*------------------------------------
logTitle("Equality without type coercion and 3 equals sign");

log("with type coercion");
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log("without type coercion");
log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);
--------------------------------------*/
/*--------------------------------------
logTitle("Map | Filter | Reduce");

log("Map")
var map = [1,2,3,4,5].map(function(n){
  return n + 2;
});
log(map);

log("Filter")
var filter = [1,2,3,4,5].filter(function(n){
  return n % 2 == 0;
});
log(filter);

log("Reduce")
var reduce = [1,2,3,4,5].reduce(function(acc, cur){
  return acc + cur;
});
log(reduce);
--------------------------------------------*/
/*------------------------------------------
logTitle('Callbacks')

function callBackExample(name, callBack){
  log(callBack(name));
}

callBackExample("Ram", function(name){
  return "hello " + name;
});
-------------------------------------------*/
/*------------------------------------------
logTitle("Export and Imports");

log(MathIM.add(1,MathIM.PI));

var animal = new AnimalIM();

log(animal.getClassType());
-----------------------------------------*/
/*----------------------------------------
logTitle("Let and const keyword");

for (let index = 0; index < 5; index++){
  log(index);
}

 // log(index);//error line

const name = 'akka'

// log(name = "k"); // error line

const person = {};

person['name'] = 'anna';

log(person.name);

const array = [];

array.push('anna is good');

log(array[0]);
-------------------------------------*/
/*------------------------------------
logTitle("Template Literals")

const name = 'akka';
const country = 'kerela';
const age = '32';

log(`name: ${name}, namelenght: ${name.length}, country: ${country}, age: ${age}`);

-------------------------------------*/
/*-----------------------------------
logTitle("spread operator array");

const arrayOne = ['dog','cat','monkey'];
const arrayTwo = ['bark', 'bit', 'jump'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name){
  log(name);
});

const name = "akka";
const nameToArray = [...name];
nameToArray.forEach(function(letters){
  log(letters)
});
 
const num = [1,2,3,4];

const addnum = function(n1,n2,n3,n4){
  return n1 + n2+ n3+ n4;
}

log(addnum(...num));
----------------------------------*/
/*---------------------------------
logTitle("spread operator object");

const address ={
  city: "la",
  country: "usa",
  postCode: "LA22"
} ;

const nameTwo = {
  firstName: "ram",
  lastName: "ravi"
};

const person = {... address, ...nameTwo};
log(JSON.stringify(person));
----------------------------------*/
/*----------------------------------
logTitle("Arrow function");

const hello = () => {
  const es6 = "ES6";
  return `Hello ${es6}`;
};

log(hello()); 

const powers =
[1,2,3,4,5].map((num,index) => Math.pow(num , index));

log(powers);

const milesToKm = miles => miles * 1.6;

log(milesToKm(222));
----------------------------------*/
/*----------------------------------
logTitle("Lexical this")

const person ={
  name: "akka",
  cars: ["jin", "nice"],
  toString:function(){
    const that = this;
    this.cars.forEach(function(car){
      log(`${that.name} has ${car}`)
    });
  }
}
person.toString();

-------------------------------------*/
/*-------------------------------------
logTitle("Enhanced object properties");

const pricePropName = "PRICE";

const calculator = (name,price) => {
  return{
    name,
    add(n1,n2){
      return n1 + n2;
    },
    [pricePropName.toLowerCase()] : price
  }
}

const calc = calculator("casio", 19);

log(calc.name);
log(calc.add(12,2));
log(calc.price);
--------------------------------------*/
/*---------------------------------------

logTitle("Array Descruturing");

const names = ["ram","ravi","jhon","som"];

const [a,b] = names; // bassed on index

log(`${a} ${b}`);

const [...name] = names; // all values

log(`${name}`);

-----------------------------------*/
/*---------------------------------
logTitle("Object Descruturing");

const getUser = () => {
  return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'United States',
      city: 'California',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();

const {name, age, gender} = user; //outer objects

const {
  address :{country : thiscountry},
  } = user; //inner objects

const {
  address :{ fullAddress :{doorNumber : thisdoorNumber}}
} =user; //inner inner objects

log(name);
log(age);
log(gender);
log(thiscountry);
log(thisdoorNumber);
----------------------------------------*/
/*---------------------------------------
logTitle("function default parameters");

const calculatorPay = (yearSalary, bonus={
  teamBonus:0,
  employeeBonus:0
}) =>{
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatorPay(2000,{teamBouns:10,employeeBbonus:10}));

--------------------------------------*/
/*-------------------------------------
logTitle("classes, inheritance and staticin javascript");

class Animal {
  constructor(name, age){
    log(`${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }
  static iAmStaticMethod(){
    log("i am static method");
    }
  eat(){
    log(`${this.name} is eating`);
  }
  sleep(){
    log(`even in age ${this.age} he is sleeping four hour now also`)
  }
}
const bob = new Animal("bob", 2);
bob.eat();
bob.sleep();

log("--------------------------------")
class Dog extends Animal{
  constructor(name, age, breed){
    super(name, age);
    this.breed = breed;
  }

  logBreed(){
    log(`${this.breed}`);
  }

  logAgeFromDog(){
    super.sleep();
  }
}
const dogmike = new Dog("mike", 4 ,"bulldog");
dogmike.logBreed();
dogmike.sleep();
dogmike.eat(); //with out creating method we can call directly from parent class
Animal.iAmStaticMethod(); // static method called by parent call name
-------------------------------------------*/
/*-------------------------------------------
logTitle("promises")

const promise = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("data back from the server");
  }, 3000);

  setTimeout(() =>{
    reject("no data back from the server");
  }, 2000);
});

promise.then(response =>{
  log(response);
}).catch(error =>{
  log(error);
})
-----------------------------------------*/
/*_--------------------------------------
logTitle("Promises All");

const namePromise = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve(["ram", "ravi", "jack"]);
  }, 3000);

  setTimeout(() =>{
    reject(["No data"]);
  }, 5000);

  const surNamePromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(["all", "rao", "jill"]);
    }, 3000);
  
    setTimeout(() =>{
      reject(["no data"]);
    }, 5000);
});

Promise.all([namePromise, surNamePromise]).then(data =>{
  const [names, surnames] = data;
  for(var i = 0; i<names.length; i++){
    const name = names[i];
    const surname = surnames[i];
    log(`${name} ${surname}`);
  }
}).catch(error =>{
  log(error);
});
________________________________________*/
/*-------------------------------------
logTitle( "Promises and Fetch API real example");

const getRandomUser = n =>{
  const fecthRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  fecthRandomUsers.then(data =>{
    data.json().then(randomUsers => {
      log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
        log(`${gender} = ${email}`)
      });
    })  
  });
}

getRandomUser(5);
----------------------------*/
/*---------------------------
logTitle("generators");

const generatorNumbers = function* () {
  yield 1;
  yield "string";
  yield "boolean = true";
  yield {name: "Ram"} 
  return "i am done";
}

const generator = generatorNumbers();

log(generator.next().value);
log(generator.next().value);
log(generator.next().value);
log(JSON.stringify(generator.next().value));
log(generator.next().value);

logTitle("more generators")

const getNumbers = function* (numbers){
  for(var i=0; i< numbers.lenght; i++){
    yield numbers[i];
  }
}

const getNumbersGen = getNumbers([1,2,3,4,5]);

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if(next.done){
    log("this is done");
    clearInterval(interval);
  }else{
    const number = next.value;
    log(number)
  }
}, 1000);
----------------------------------*/
/*----------------------------------
logTitle("Async Await")

async function logName(name){
  log(name);

  //1 .we can yield promises using await
  const transfromName = new Promise((resolve, reject) =>{
    setTimeout(() =>resolve(name.toUpperCase()),5000);
  });

  const result = await transfromName ;
  //2. return a promise
  return result;
}

logName("ram").then(res => {
  log("result from async function = " + res);
})

log("---------------------------------------------------");

const getRandomUser = async n => {
  try{
    const fecthRandomUsers = await
    fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await fecthRandomUsers.json();
    data.results.forEach(element => {
      const {gender, email} = element;
      log(`${gender} = ${email}`);     
    });
    return data;
  }catch(err){
    log(err)
  }
}

getRandomUser(2);
---------------------------*/