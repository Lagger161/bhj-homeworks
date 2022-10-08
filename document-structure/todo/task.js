let taskInput = document.getElementById("task__input");
let tasksAdd = document.getElementById("tasks__add");
let tasksList = document.getElementById("tasks__list");
let taskRemove = document.querySelectorAll(".task__remove");

function addTask(task) {
    let sample = `<div class="task">
    <div class="task__title">
    ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;

    tasksList.insertAdjacentHTML("afterbegin", sample);
    taskInput.value = "";
}

tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (taskInput.value.trim() != '') {
        addTask(taskInput.value);
    }
})

taskInput.addEventListener("click", (e) => {
    if(e.target.classList.contains("task__remove")) {
        e.target.closest(".task").remove();
    }
})