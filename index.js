const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <button class="complete">✓</button>
            <span class="task-text">${taskText}</span>
            <span class="task-actions">
                <button class="delete">Delete</button>
            </span>
        `;

    const completeBtn = taskItem.querySelector(".complete");
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}