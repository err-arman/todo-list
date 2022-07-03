let input = document.getElementById("input-Box");
let btn = document.getElementById("button");
let list = document.getElementById("list");
let err = document.getElementById("err");


btn.addEventListener("click", function () {
    if (input.value === "") {
        err.innerHTML = "fill the input box";
    }

    if (input.value) {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.className = "list-item";

        list.insertAdjacentElement('afterbegin', li);


        let deleteItem = document.createElement("a");
        deleteItem.href = "javascript:void(0)";
        deleteItem.innerHTML = "x";
        deleteItem.className = 'delete-item-btn';
        li.appendChild(deleteItem);

        deleteItem.addEventListener('click', function () {
            li.remove()
        })

        err.innerHTML = "";
    }
    input.value = "";
});
