function todo() {
  document.getElementById("error").innerHTML = "";
  const inputTask = document.getElementById("input__task").value;
  if (inputTask === "") {
    document.getElementById("error").innerHTML = "Please enter the task";
  } else {
    const listContent = document.createElement("li");
    listContent.textContent = inputTask;

    const removeButton = document.createElement("input");
    removeButton.type = "button";
    removeButton.value = "Remove";
    removeButton.className = "remove__button";
    removeButton.id = "remove__button";

    const completedButton = document.createElement("input");
    completedButton.type = "button";
    completedButton.value = "Completed";
    completedButton.className = "completed__button";
    completedButton.id = "completed__button";

    listContent.appendChild(removeButton);
    listContent.appendChild(completedButton);

    const list = document.getElementById("task__list");
    list.appendChild(listContent);

    document.getElementById("input__task").value = "";

    list.addEventListener("click", function (e) {
      e.stopPropagation();
      const task = e.target.parentNode;
      task.style.textDecorationLine = "line-through";
    });

    list.addEventListener("dblclick", function (e) {
      e.stopPropagation();
      e.target.parentNode.remove();
    });
  }
}
