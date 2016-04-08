let todos = [];

document.querySelector("#toDoSubmit")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let infoField = document.querySelector("#toDoInput");
    console.log(infoField.value);
    let todo = new Todo(infoField.value);
    todos.push(todo);
    infoField.value = "";
    render();
  })


function Todo(item) {
  this.item = item;
  this.completed = false;
}

function render() {
  let list = document.querySelector("#toDo");

  // document.querySelector
  let oldTodos = document.querySelectorAll("#toDo li");

  Array.from(oldTodos).forEach((todo) => {
    todo.removeEventListener("click", (e) => {
      markComplete(todo);
    })
  })

  // loop through existing todos, call removeEventListener
  // on each todo

  list.innerHTML = "";


  todos.forEach((todo) => {
      let li = document.createElement("li");
      li.textContent = todo.item;
      list.appendChild(li);

      // add event listener to the li
      li.addEventListener('click', (e) => {
        markComplete(todo);
      });

      // add a class if the todo is completed
      if (todo.completed) {
        li.classList.add("completed");
      }
    })

}

function markComplete(todo) {
  if (todo.completed) {
    todo.completed = false;
  } else {
    todo.completed = true;
  }
  render();
}

render();
