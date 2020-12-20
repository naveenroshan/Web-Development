//Advance form validation
document.querySelector('.myform').addEventListener('submit', (event) =>{
    //reset the url
    event.preventDefault();
    //print the user data from the username box to console
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    //clean the user and realname box box 
    event.target.username.value ='';
    event.target.realname.value ='';
})