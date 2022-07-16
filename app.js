let input = document.getElementById("input-Box");
let btn = document.getElementById("button");
let list = document.getElementById("list");
let err = document.getElementById("err");
let showData = document.getElementById('showData');

let todoItems = localStorage.getItem("todo_items");
let arr = [];
if (todoItems) {
    arr = JSON.parse(todoItems);
    arr.forEach(addTodoItem);
}

btn.addEventListener("click", function () {
    const inputValue = input.value;
    if (inputValue === "") {
        err.innerHTML = "fill the input box";
    }

    if (inputValue) {
        addTodoItem(inputValue);
        arr.push(inputValue);

        localStorage.setItem("todo_items", JSON.stringify(arr));
        err.innerHTML = "";
    }
    input.value = "";
});

function appendDeleteButton(li){
    let deleteItem = document.createElement("a");
    deleteItem.href = "javascript:void(0)";
    deleteItem.innerHTML = "x";
    deleteItem.className = 'delete-item-btn';
    li.appendChild(deleteItem);
    deleteItem.addEventListener('click', function () {
        li.remove()
    })
}

function addTodoItem(todoValue) {
    let li = document.createElement("li");
    li.innerHTML = todoValue;
    li.className = "list-item";

    list.insertAdjacentElement('afterbegin', li);
    appendDeleteButton(li);
}
