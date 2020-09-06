// list references
const todoList = document.getElementById('todoList');

// entry references
const newTodo = document.getElementById('newTodo');
const addTodoBtn = document.getElementById('addTodoBtn');


class Item {
    constructor(itemName) {
        this.createTodo(itemName);
    }

    createTodo(itemName) {
        // list item 
        let todoItem = document.createElement('li');
        todoItem.disabled = true;
        todoItem.classList.add('list-group-item')
        todoItem.classList.add('list-group-item-primary');
        
        let todoText = document.createElement('span');
        todoText.innerText = itemName;

        let removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.classList.add('close');

        let closeX = document.createElement('span');
        closeX.innerText = 'x';

        todoList.appendChild(todoItem);
        todoItem.appendChild(todoText);
        todoItem.appendChild(removeBtn);
        removeBtn.appendChild(closeX);

        removeBtn.addEventListener('click', () => this.removeButton(todoItem))
    }

    removeButton(item) {
        todoList.removeChild(item);
    }
}

function checkInput() {
    if (newTodo.value != "") { 
        new Item(newTodo.value); 
        newTodo.value = "";
    }
}

addTodoBtn.addEventListener('click', checkInput);

