// select element a assign them to variables

const newTasks = document.querySelector('#new-tasks');
const form = document.querySelector('form');
console.log(form)
const todoUL = document.querySelector('#items');
const compelatedUL = document.querySelector('.completed ul');
console.log(compelatedUL)


// fucntion create 

const createTask = (task) => {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input')
    let label = document.createElement('lable')

    label.innerText = task;
    checkbox.type = 'checkbox';
    listItem.className = 'item'
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}

//add task

const addTask = function(event) {
    event.preventDefault();

    let listItem = createTask(newTasks.value);
    todoUL.appendChild(listItem);
    newTasks.value = "";

    //bind the new item to the incomplete list
    bindInCompleteItem(listItem, completedTask);
}

const completedTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    

    compelatedUL.appendChild(listItem);
    bindCompleteItem(listItem, deleteTask)
}

const deleteTask = function() {
   let listItem = this.parentNode;
   let ul = listItem.parentNode;
   ul.removeChild(listItem);
   
}
const bindInCompleteItem = function(taskItem, checkboxClick) {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;

}

const bindCompleteItem = function(taskItem, deleteBottunClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteBottunClick;
}

for(let i = 0; i < todoUL.children.length; i++){
    bindInCompleteItem(todoUL.children[i], completedTask)
}

for(let i = 0; i < compelatedUL.children.length; i++){
    bindCompleteItem(compelatedUL.children[i], deleteTask)
}



form.addEventListener('submit', addTask)