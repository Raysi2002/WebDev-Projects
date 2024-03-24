const content = document.getElementById("content");
const addTodo = document.getElementById("addTodo");
const storeTodo = document.getElementById("storeTodo");


addTodo.addEventListener('click', (e)=>{
    let contentValue = content.value.trim();
    if (contentValue === ''){
        alert("Spaces can't be added!");
    }
    else{
        storeTodo.innerHTML += `<div class="todoContent">
                            <p class="todoContent">
                            ${contentValue}
                            </p>
                            <input type="checkbox" id="todoCheck">
                            </div>`;
    }
    console.log(document.querySelector(".todoContent").innerText)
});
