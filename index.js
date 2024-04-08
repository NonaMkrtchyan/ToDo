const toDoNameInput = document.getElementById('toDoNameInput');
const toDoNamesList =  JSON.parse(localStorage.getItem('toDoNamesList')) || [];
const toDoListContainer = document.getElementById('toDoList');
const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
const ulContainer = document.getElementById('toDoListUl');
function changeLocalStorage() {
    localStorage.setItem('toDoNamesList', JSON.stringify(toDoNamesList));
    localStorage.setItem('taskLits', JSON.stringify(taskList));
}


function renderToDoNamesList() {
    const liElements = toDoNamesList.map((item) => {
        return `<li id = 'toDoList'>
        ${item}
        <div id = 'toDoListsDiv'>
        <input type="text" placeholder="Create Your ToDo" id="toDoListInput">
        <button type="text" onclick="createToDoList()" >Create</button>
        </div>
        </li>`
    });
    ulContainer.innerHTML = liElements.join('');
}

function renderToDoList() {
    const liElements = taskList.map((item) => {
        return `<li>${item.toDo}</li>`
    })
    toDoListContainer.innerHTML = liElements.join('');

}

function createToDoContainers() {
    const inputValue = document.getElementById('toDoNameInput').value;
    inputValue.value = '';
    //ulContainer.innerHTML += `<li>${inputValue}</li>`;
    toDoNamesList.push(inputValue);
    changeLocalStorage();
    renderToDoNamesList();
}

function craeteToDoList() {
    const inputValue = document.getElementById('toDoListInput');
    inputValue.value = '';
    const task = {
        isDone: false,
        toDo: inputValue
    }
    taskList.push(task);
    changeLocalStorage();
    renderToDoList();

}
(function() {
    renderToDoNamesList();
    renderToDoList();
}
)();
