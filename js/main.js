const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const wrapper = document.querySelector('.wrapper');

function item(itemName) {
    createDiv(itemName);
}
function createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');

    let editicon = document.createElement('i')
    editicon.classList.add("fas", "fa-edit");

    let removeicon = document.createElement('i')
    removeicon.classList.add("fas", "fa-trash-alt");


    wrapper.appendChild(itemBox);

    editButton.appendChild(editicon);
    removeButton.appendChild(removeicon);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener('click', () => this.edit(input));

    removeButton.addEventListener('click', () => this.remove(itemBox));

}

function edit(input) {
    input.disabled = !input.disabled;
}
function remove(item) {
    wrapper.removeChild(item);
}


function check() {

    if (input.value != "") {
        item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
    console.log(e.which);
    if (e.which == 13) {
        check();
    }
})










