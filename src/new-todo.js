export function newTodo() {
    var container = document.createElement('div');
    container.className = "todo";
    this.parentNode.parentNode.insertBefore(container, this.parentNode.nextSibling);
}