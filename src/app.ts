import { renderCategories } from "./helpers/render-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
	Category.GENERAL,
	Category.WORK,
	Category.HOBBY,
	Category.GYM,
];

const tasks: Task[] = [
	{ name: "Wyrzucić śmieci", done: false },
	{ name: "Pójść na siłkę", done: true, category: "gym" },
	{ name: "Nakarmić koty", done: false },
];

const addTask = (task: Task) => {
	tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
	selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
	event.preventDefault();
	addTask({
		name: taskNameInputElement.value,
		done: false,
		category: selectedCategory,
	});
	render(tasks, tasksContainerElement);
});

renderCategories(
	categories,
	categoriesContainerElement,
	updateSelectedCategory
);
render(tasks, tasksContainerElement);
