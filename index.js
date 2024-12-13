const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

//set task to array
let newTasks = [];

//function to add task
function addTask(task) {
  newTasks.push({ task, completed: false });
  renderTasks();
}
//function to remove task
function removeTask(index) {
  newTasks.splice(index, 1);
  renderTasks();
}
//function to complete task
function completeTask(index) {
  newTasks[index].completed = true;
  renderTasks();
}

//function to clear all task
function clearAllTask() {
  newTasks = [];
  renderTasks();
}

//function to render task in the list
function renderTasks() {
  todoList.innerHTML = "";

  newTasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.task;
    taskElement.style.textDecoration = task.completed ? "line-through" : "none";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.onclick = () => removeTask(index);

    const completeButton = document.createElement("button");
    completeButton.textContent = "complete";
    completeButton.classList.add("complete-btn");

    completeButton.onclick = () => completeTask(index);

    taskElement.appendChild(deleteButton);
    taskElement.appendChild(completeButton);
    todoList.appendChild(taskElement);
  });
}

// Add event listeners
addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    addTask(task);
    todoInput.value = "";
  }
});

clearBtn.addEventListener("click", clearAllTask);
