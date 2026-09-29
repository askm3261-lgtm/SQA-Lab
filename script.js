const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
    emptyMessage.style.display = taskList.children.length === 0 ? "block" : "none";
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    const taskLabel = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskLabel.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
        updateEmptyMessage();
    });

    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
    updateEmptyMessage();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateEmptyMessage();
