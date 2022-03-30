import '../stylesheets/reset.css';
import '../stylesheets/style.css';

import TodoItems from './modules/TodoItems.js'
import grabinput from './modules/GrabUserInput.js'
import displayTodos from './modules/DisplayTodos.js'


let todos;
if (localStorage.length !== 0) {
  const b = JSON.parse(localStorage.getItem('todos'));
  todos = new TodoItems(b);
} else {
  todos = new TodoItems([]);
  localStorage.setItem('todos', JSON.stringify(todos.todoitems));
}

let addtodoarrow = document.querySelector('.addtodoarrow');
addtodoarrow.addEventListener("click", grabinput.grab);

displayTodos.display();