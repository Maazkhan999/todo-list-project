

const items = document.querySelector("#input");
const todo_box = document.querySelector('#to-do');

//Load data from local storage
document.addEventListener("DOMContentLoaded", function () {
    const savedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    savedItems.forEach(item => addToDolist(item));
});


items.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        addToDolist(this.value);
        this.value = "";
    }
});

const addToDolist = (item) => {
    const listItems = document.createElement('li');
    listItems.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;
    
    listItems.addEventListener('click', function () {
        this.classList.toggle('workdone');
        updateLocalStorage();
    });

    listItems.querySelector('i').addEventListener('click', function () {
        listItems.remove();
        updateLocalStorage();
    });

    todo_box.appendChild(listItems);
    
    // Save data to local storage
    updateLocalStorage();
};

const updateLocalStorage = () => {
    const todoItems = Array.from(todo_box.children).map(item => item.textContent.trim());
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
};

