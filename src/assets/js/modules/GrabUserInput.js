import Todo from './Todo';
import TodoItems from './TodoItems';

const todoinput = document.querySelector('.todoinput');

class GrabUserInput {
  // eslint-disable-next-line class-methods-use-this
  grab(val) {
    val.preventDefault();
    if (todoinput.value === '') {
      return;
    }
    const idx = JSON.parse(localStorage.getItem('todos')).length + 1;
    const todo = new Todo(todoinput.value, idx);
    TodoItems.addtodo(todo);
    todoinput.value = '';
  }
}

const grabinput = new GrabUserInput();
export default grabinput;