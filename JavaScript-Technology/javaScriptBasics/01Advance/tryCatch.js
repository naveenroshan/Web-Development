const converToRs = function (dollar){
    if (typeof dollar === 'number') {
        return dollar * 70
    } else {
        throw Error('value is need to in number formate')
    }
}

//normal flow
const myValue = converToRs(5)
console.log('normal flow' + ' ' + myValue);

//abnormal flow
try {
    const myValue = converToRs('five')
    console.log(myValue);
}
    catch(e){
        console.log(e)
}

//this below code will be execut
//since we have handed the try catch for problem making code
console.log('i am not running');
