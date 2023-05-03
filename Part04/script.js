const input = document.querySelector(".todo-input");
const unfinishedTodoList = document.querySelector(".unfinished-todo");
const finishedTodoList = document.querySelector(".finished-todo");
const editButtons = document.querySelectorAll(".edit-btn");
const deleteButtons = document.querySelectorAll(".delete-btn");
const clearAllButtonMain = document.querySelector(".clear-all-btn");

// Create a new task
function createTask(taskText) {

  if(taskText.trim() === "" || taskText.trim() === " "){
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <label>
      <input type="checkbox">
      <span></span>
    </label>
    <span class="task-text">${taskText}</span>
    <div class="buttons">
      <button class="edit-btn"><i class="fa-solid fa-edit"></i></button>
      <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;
  const checkbox = task.querySelector("input[type=checkbox]");
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      finishedTodoList.appendChild(task);
    } else {
      unfinishedTodoList.appendChild(task);
    }
  });
  const editButton = task.querySelector(".edit-btn");
  editButton.addEventListener("click", function () {
    const taskText = task.querySelector(".task-text");
    const newText = prompt("Enter revised task text", taskText.textContent);
    if (newText !== null) {
      taskText.textContent = newText;

    }
  });
  const deleteButton = task.querySelector(".delete-btn");
  deleteButton.addEventListener("click", function () {
    task.remove();
  });
  return task;
}

// Add a new task when the enter key is pressed
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value !== "") {
    const task = createTask(input.value);
    unfinishedTodoList.appendChild(task);
    input.value = "";
  }
});


// Add event listeners to existing edit buttons
for (const editButton of editButtons) {
  editButton.addEventListener("click", function () {
    const task = editButton.closest(".task");
    const taskText = task.querySelector(".task-text");
    const newText = prompt("Enter new task text", taskText.textContent);
    if (newText !== null) {
      taskText.textContent = newText;
    }
  });
}

// Add event listeners to existing delete buttons
for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", function () {
    const task = deleteButton.closest(".task");
    task.remove();
    tasks = tasks.filter((t) => t.text !== task.querySelector(".task-text").textContent);
  });
}

const clearAllBtn = document.getElementById("clear-all-btn");
clearAllBtn.addEventListener("click", function () {
  if (confirm("Warning! This will clear both unfinished AND finished tasks")) {
    unfinishedTodoList.innerHTML = "";
    finishedTodoList.innerHTML = "";
    tasks = [];
    localStorage.clear();
  }
});