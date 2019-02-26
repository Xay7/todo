import {
    newTodo
} from '../src/new-todo.js';

export function newProject() {

    // Generate project containers
    var project = document.createElement("div");
    project.className = "project";

    // Append containers before the new project button
    var button = document.getElementById("btn");
    document.getElementById("btn").parentNode.insertBefore(project, button);

    // Adds todo button in generated containers
    var addTodo = document.createElement("button");
    addTodo.className = "add-todo";
    addTodo.innerHTML = '<i class="fas fa-plus-square fa-3x"></i>';
    project.appendChild(addTodo);
    addTodo.addEventListener('click', newTodo);

    // Adds project name text 
    var title = document.createElement("h3");
    title.className = "title";
    title.innerHTML = "New project";
    title.setAttribute("contenteditable", "true");
    title.setAttribute("onkeypress", "return (this.innerText.length <= 17)");
    project.appendChild(title);

    // Adds delete button
    var deleteProject = document.createElement("button");
    deleteProject.className = "delete-project";
    deleteProject.innerHTML = '<i class="fas fa-trash-alt fa-2x"></i>';
    project.appendChild(deleteProject);

    deleteProject.addEventListener('click', function () {
        if (confirm("Are you sure?")) {
            this.parentNode.remove();
        } else return;

    });

    localStorage.setItem("project", project.outerHTML);
}