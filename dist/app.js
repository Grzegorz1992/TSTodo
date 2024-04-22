// <li>
// 	<label for="task-1">Wyrzucić śmieci</label>
// 	<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>;
const taskNameInputElement = document.querySelector("#name");
const tasksContainerElement = document.querySelector(".tasks");
const addButtonElement = document.querySelector("button");
const tasks = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
});
render();
