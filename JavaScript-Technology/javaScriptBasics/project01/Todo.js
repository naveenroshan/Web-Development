//Todo application 

//getting the list iteams from html
var ul = document.getElementById('list');
var li;

//getting the addbutton from the html tag
var addButton = document.getElementById('add');
//performing action on addbutton 
addButton.addEventListener('click', addIteam);

//getting the removebutton 
var removeButton = document.getElementById('remove');
//performing action on removebutton
removeButton.addEventListener('click', removeIteam);

function addIteam() {
    //getting input from the user in the text box    
    var input = document.getElementById('input');
    var item = input.value;
    //getting ul list element
    ul = document.getElementById('list');
    //creating node using item value from the user
    var textnode = document.createTextNode(item);

    //check the value of text iteam:
    if (iteam === '') {
        return false;
    } else {
        //creating the place for the adding iteams
        li = document.createElement('input');
        checkbox.type ='checkbox';
        checkbox.setAttribute('id', 'check');

        //create a label
        var label = document.createElement('label');
        //optional line
        label.setAttribute('for', 'iteam');

        //add this element to web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);

        //we are insertting the elements in above all check list
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual'; 
        }, 3);        
        // deleting the user input from text box
        input.value = '';   
    }
}

function removeIteam() {
    li = ul.children
    for (let index = 0; index < li.lenght; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removechild(li[index])
        }
    }
}