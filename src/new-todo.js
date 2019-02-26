import {
    format,
} from 'date-fns'


export function newTodo() {

    // Creating todo containers
    var container = document.createElement('div');
    container.className = "todo";
    this.parentNode.appendChild(container);
    // this.parentNode.parentNode.insertBefore(container, this.parentNode.nextSibling);

    // Adds date to current task
    var date = document.createElement("span");
    date.innerHTML = format(new Date(), 'DD/MM');
    date.className = "time";
    container.appendChild(date);

    // Creates todo text
    var title = document.createElement("p");
    title.innerHTML = "New task";
    title.className = "new-task";
    title.setAttribute("contenteditable", true);
    title.setAttribute("spellcheck", false);
    title.setAttribute("onkeypress", "return (this.innerText.length <= 35)");
    container.appendChild(title);

    // Creates is todo done button
    var done = document.createElement("button");
    done.className = "done";
    done.innerHTML = '<i class="fas fa-check-square fa-lg"></i>';
    container.appendChild(done)


    // Creates delete todo button
    var deleteTodo = document.createElement("button");
    deleteTodo.className = "delete-todo";
    deleteTodo.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>';
    container.appendChild(deleteTodo);

    deleteTodo.addEventListener('click', function () {
        infoContainer.remove();
        this.parentNode.remove();
    });

    // Creates todo description
    var infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    container.parentNode.insertBefore(infoContainer, container.nextSibling);

    $(container).click(function (e) {
        if (e.target != this) {
            return;
        } else {
            $(infoContainer).toggle();
        }

    });
    $(done).click(function () {
        $(this.parentNode).toggleClass("todoDone");
        $(infoContainer).toggleClass("todoDone");
        $(done).toggleClass("white");
        $(deleteTodo).toggleClass("white");
    });

    var info = document.createElement("p");
    info.innerHTML = "Description...";
    info.className = "description";
    info.setAttribute("contenteditable", true);
    infoContainer.appendChild(info);
}