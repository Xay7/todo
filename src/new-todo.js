export function newTodo() {

    // Creating todo containers
    var container = document.createElement('div');
    container.className = "todo";
    this.parentNode.parentNode.insertBefore(container, this.parentNode.nextSibling);

    // Creates todo text
    var todoText = document.createElement("p");
    todoText.innerHTML = "I'm a task!";
    todoText.setAttribute("contenteditable", true);
    container.appendChild(todoText);

    // Creates delete todo button
    var deleteTodo = document.createElement("button");
    deleteTodo.className = "delete-todo";
    deleteTodo.innerHTML = '<i class="fas fa-minus-circle fa-lg"></i>';
    container.appendChild(deleteTodo);

    deleteTodo.addEventListener('click', function () {
        if (confirm("Are you sure")) {
            this.parentNode.remove();
        } else return;
    });

}