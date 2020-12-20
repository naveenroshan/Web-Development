//creating a object
const student = {
    name: 'jhon',
    age: 23,
    isActice: yes
}

//converting this object in to string to be stored in local storage

const studentObjToString = JSON.stringify(student)
//log in console
console.log(typeof studentObjToString);

//store the string in local storage
localStorage.setItem('student', studentObjToString)

//converting the string into json
const toJsonStudent = JSON.parse(studentObjToString)

console.log(typeof studentObjToString);
