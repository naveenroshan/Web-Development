const chunckingArray = (arr, len) =>{
    //Init chunck array
    const chunckedArr =[];

    //loop thought the array
    arr.forEach(val => {
        //get last element 
        const last = chunckedArr[chunckedArr.length - 1];

        //check if last  and if  last  lenght is equal to  the chuck len
        if(!last || last.length === len ){
            chunckedArr.push([val]);
       }else{
           last.push(val);
       }        
    });
    return chunckedArr
}
module.exports = chunckingArray