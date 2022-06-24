
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');
let todos = [];


todoForm.addEventListener('submit', function(event) {
    // prevent the page from reloading when submitting the form
    event.preventDefault();
    addTodo(todoInput.value); // call addTodo function with input box current value
  });


  // function to add todo
function addTodo(item) {
    // if item is not empty
    if (item !== '') {
      // make a todo object, which has id, name, and completed properties
      const todo = {
        id: 1,
        name: item,
        completed: false
      };
  // then add it to todos array
      todos.push(todo);
      renderTodos(todos); //  displays what is in <ul>
  // finally clear the input box value
      todoInput.value = '';
    }
  }