import Todo from './Todo.js';
import TodoItems from './TodoItems.js';

const todoinput = document.querySelector('.todoinput');

class GrabUserInput {
  // eslint-disable-next-line class-methods-use-this
  grab(val){
    val.preventDefault();
    if (todoinput.value === ''){
      return;
    }
    let idx = JSON.parse(localStorage.getItem('todos')).length + 1;
    const todo = new Todo(todoinput.value, idx);
    TodoItems.addtodo(todo);
    todoinput.value = '';
  }
}

const grabinput = new GrabUserInput();
export default grabinput;