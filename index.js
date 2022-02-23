var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

function createListElement() {
        var div = document.createElement('div');
        var li = document.createElement('li');
        div.classList.add('wrapper');
        ul.appendChild(div);
        var delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode('Delete'));
        delBtn.className = 'delButton';
        li.appendChild(document.createTextNode(input.value));
        li.className = 'task';
        div.append(li,delBtn);
        input.value = "";
}

function onClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

function onKeyPress(event) {
    if (input.value.length > 0 && event.which === 13) {
        createListElement();
    }
}

function checkTask(event) {
    if (event.target.classList[0] === 'task') {
        event.target.classList.toggle('done');
    }
}

function checkDelete(event) {
    if (event.target.className === 'delButton') {
        event.target.parentElement.remove();
    }
}

function handleClickUi(event) {
    checkTask(event);
    checkDelete(event);
}


ul.addEventListener('click',handleClickUi);
button.addEventListener('click',onClick);
input.addEventListener('keypress',onKeyPress);
