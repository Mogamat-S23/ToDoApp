
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
        id: Date.now(),
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

  // function to display given todos to screen
function renderTodos(todos) {
    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';
  // run through each item inside todos
    todos.forEach(function(item) {
      // check if the item is completed
      const checked = item.completed ? 'checked': null;
  // make a <li> element and fill it
      // <li> </li>
      const li = document.createElement('li');
      // <li class="item"> </li>
      li.setAttribute('class', 'item');
    
      li.setAttribute('data-key', item.id);
     
      // if item is completed, then add a class to <li> called 'checked', which will add line-through style
      if (item.completed === true) {
        li.classList.add('checked');
      }
  li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
        <button class="delete-button">X</button>
      `;
      //  add the <li> to the <ul>
      todoItemsList.append(li);
    });
  }

  // add todos to local storage
function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
    // display them to screen
    renderTodos(todos);
  }

  