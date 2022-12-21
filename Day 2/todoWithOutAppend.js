let task = [];
const addBtn = document.getElementById("submit__button");
const input = document.getElementById("task__input");
const todoList = document.getElementById("todo-list");

var userInput;
var taskItem;

window.addEventListener("load", () => {
  input.focus();
});

addBtn.addEventListener("click", () => {
  userInput = input.value;
  if (userInput === "") {
    alert("Please add task..");
  } else {
    task.push(userInput);
    todoList.innerHTML = "";
  }
  showTodoList();
});

const showTodoList = () => {
  task.forEach((value) => {
    todoList.innerHTML += `
        <div class='todo-list__Item' id='todo-item'>
          <input type='text' value='${value}' disabled/>
          <div>
            <button id='todo--edit'>Edit</buton>
            <button id='todo--delete'>Delete</buton>
            <button id='todo--complete'>Complete</buton>
            <button id='todo--save' hidden>Save</buton>
          </div>
        </div>
    `;
    input.value = "";
  });
  getTodoItem();
};

const getTodoItem = () => {
  taskItem = document.querySelectorAll("#todo-item");
  taskItem.forEach((list, key) => {
    let completeStatus = false;
    let editBtn = list.children[1].children[0];
    let deleteBtn = list.children[1].children[1];
    let completeBtn = list.children[1].children[2];
    let saveBtn = list.children[1].children[3];
    let editInput = list.children[0];

    editBtn.addEventListener("click", (e) => {
      saveBtn.hidden = false;
      editInput.disabled = false;
      editInput.focus();
    });
    deleteBtn.addEventListener("click", () => {
      const status = confirm("Are you sure you want to delete?");
      if (status) {
        task.splice(key, 1);
        todoList.innerHTML = "";
        showTodoList();
      }
    });
    completeBtn.addEventListener("click", () => {
      if (!completeStatus) {
        editInput.style.textDecorationLine = "line-through";
        completeStatus = true;
      } else {
        completeStatus = false;
        editInput.style.textDecorationLine = "none";
      }
    });
    saveBtn.addEventListener("click", (e) => {
      task.splice(key, 0, editInput.value);
      saveBtn.hidden = true;
      editInput.disabled = true;
    });
  });
};
