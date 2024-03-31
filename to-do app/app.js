const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Create a new ToDo
function createTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.className = "flex-row align-center";
  li.appendChild(createDeleteButton());
  return li;
}

// Create a delete button
function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", deleteTodo);
  return deleteButton;
}

// Delete a ToDo
function deleteTodo(e) {
  const parent = e.target.parentElement;
  list.removeChild(