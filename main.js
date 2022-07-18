let form = document.querySelector("form");
let ul = document.querySelector("ul");
let toDoTextbox = document.querySelector('#toDo');
let addButton = document.querySelector('#addButton');
let remButton = document.querySelector('#remButton');
// let resetButton = document.querySelector('#resetButton');


form.addEventListener('submit', function(event){
    event.preventDefault();

    if(toDoTextbox.value === ''){
        alert('Please enter a value in the textbox');
    } else {

    //create new element
    let listItem = document.createElement('li');
    
    //set the text of the newly created element
    listItem.innerText = toDoTextbox.value;

    //add click event listener to new item
    listItem.addEventListener('click', function(){
        console.log(listItem.innerText);

        if(listItem.style.textDecoration === ''){
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = '';
        }
    })

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener('click', function(){
        listItem.remove();
    })

    listItem.appendChild(deleteButton);

    //add item to ul
    //parentElement.appendChild(newChildElement)
    ul.appendChild(listItem);
    
    toDoTextbox.value = "";
    }
})

remButton.addEventListener('click', function(){
    
    let listAll = document.querySelectorAll("ul li") 
    console.log(listAll);

    if(listAll.length !== 0){
        for(let item of listAll){
            if(item.style.textDecoration === 'line-through'){
                item.remove();
            }
        }
    }
})








