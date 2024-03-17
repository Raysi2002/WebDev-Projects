const todoBox = document.getElementById("todoBox");
const add = document.getElementById("add");
const todoList = document.getElementById("todoList");

console.log(typeof todoBox.value)

add.addEventListener("click", function (e){
    if(todoBox.value != ""){
        const content = document.createElement("div");
        content.innerText = todoBox.value;
        todoList.append(content);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        content.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(e){
            todoList.removeChild(content);
        })
    }
})