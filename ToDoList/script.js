var ul = document.getElementById("list-containers");
var input = document.getElementById("input");

function add() {

    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var listitem = document.createElement("li");

    listitem.innerHTML =
        input.value +
        " <button class='delete-btn' onclick='deleteItem(event)'>Delete</button>";

    ul.append(listitem);

    input.value = "";
}

function deleteItem(event) {
    event.target.parentElement.remove();
}