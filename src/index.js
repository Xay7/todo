import {
    newProject
} from '../src/new-project';

document.getElementById("btn").addEventListener('click', newProject);

$(".add-todo").keypress(function (e) {
    alert("works");
    return e.which != 13;
});