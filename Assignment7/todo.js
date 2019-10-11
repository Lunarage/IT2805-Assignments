var tasks = [];

function addTask(){
    let newTask = document.getElementById('newTask');

    let taskObj = {};
    taskObj.text = newTask.value;
    let d = new Date();
    taskObj.date = d.toISOString();
    tasks.push(taskObj);

    let task = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('onClick','updateCompleted()');
    task.appendChild(checkbox);
    let text = document.createElement('span');
    text.innerText = newTask.value;
    task.appendChild(text);

    let todoList = document.getElementById('todoList');
    todoList.insertBefore(task, todoList.firstChild);

    updateCompleted();
}

function updateCompleted(){
    let todoList = document.getElementById('todoList');
    let total = 0;
    let completed = 0;
    for (let i = 0; i < todoList.children.length; i++){
        total = total + 1;
        if(todoList.children[i].firstChild.checked){
            completed = completed + 1;
        }
    }
    if(total > 0){
        let completedField = document.getElementById('completedField');
        completedField.value = completed + "/" + total + " completed";
    }
}
