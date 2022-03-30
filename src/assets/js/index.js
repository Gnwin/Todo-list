import '../stylesheets/reset.css';
import '../stylesheets/style.css';

import TodoItems from './modules/TodoItems';
import grabinput from './modules/GrabUserInput';
import displayTodos from './modules/DisplayTodos';

let todos;
if (localStorage.length !== 0) {
  const b = JSON.parse(localStorage.getItem('todos'));
  todos = new TodoItems(b);
} else {
  todos = new TodoItems([]);
  localStorage.setItem('todos', JSON.stringify(todos.todoitems));
}

const addtodoarrow = document.querySelector('.addtodoarrow');
addtodoarrow.addEventListener('click', grabinput.grab);

displayTodos.display();