// select element 
const newTask = document.querySelector('#new-tasks');
const form = document.querySelector('form');
const incompleteUL = document.querySelector('#items');
const completedUL = document.querySelector('.completed ul');

//function create 

//create task function 
const createTask = function(task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let listButton = document.createElement('button');

    listButton.innerText = "Updete";
    listButton.className = 'update'

    label.innerText = task;
    checkbox.type = "checkbox";
    checkbox.className = "checkbox__margin";
    listItem.className = 'item';
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(listButton);

    return listItem;
}

const addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteUL.appendChild(listItem);
    newTask.value = "";

    //bind function
     bindInCompleteItem(listItem, completedTask)


}

const completedTask = function() {
    let listItem = this.parentNode;
    let buttonBtn = document.createElement('button');
    buttonBtn.innerText = "Delete";
    buttonBtn.className = 'delete';
    listItem.appendChild(buttonBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    let updeteButoon = listItem.querySelector('button');
    updeteButoon.remove()

    completedUL.appendChild(listItem)

    //bind function
    bindCompleteItem(listItem, deleteTask)

}

const deleteTask = function(){
    let listItem  = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

const bindInCompleteItem = function(taskItem, checkboxClick) {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

const bindCompleteItem = function(taskItem, deleteButtonclick){
    let buttonBtn = taskItem.querySelector('.delete');
    buttonBtn.onclick = deleteButtonclick;
}

for(let i = 0; i < incompleteUL.children.length; i++) {
    bindInCompleteItem(incompleteUL.children[i], completedTask)
}

for(let i = 0; i < completedUL.children.length; i++){
    bindCompleteItem(completedUL.children[i], deleteTask)
}

form.addEventListener('submit', addTask)

