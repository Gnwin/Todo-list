import Todo from './Todo';
import TodoItems from './TodoItems';

const todoinput = document.querySelector('.todoinput');

class GrabUserInput {
  grab = (val) => {
    val.preventDefault();
    if (todoinput.value === '') {
      return;
    }
    const idx = JSON.parse(localStorage.getItem('todos')).length + 1;
    const todo = new Todo(todoinput.value, idx);
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    TodoItems.addtodo(todo, todosArr);
    todoinput.value = '';
  }

  remove = (val) => {
    val.preventDefault();
    if (!val.target.parentElement.children[0].checked) {
      return;
    }
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    TodoItems.deletetodo(Number(val.target.parentElement.children[1].id), todosArr);
  }

  changeBackground = (val) => {
    val.preventDefault();
    const parent = val.target.parentElement;
    parent.children[2].style.display = 'none';
    parent.children[3].style.display = 'block';
  }

  changeBlur = (val) => {
    val.preventDefault();
    const parent = val.target.parentElement;
    parent.children[2].style.display = 'block';
    parent.children[3].style.display = 'none';
  }

  changeValue = (event, description) => {
    if (event.target.value === '') {
      event.target.value = description;
      return;
    }
    const idx = Number(event.target.id);
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    TodoItems.edit(event.target.value, idx, todosArr);
  }

  clearAllCompleted = () => {
    TodoItems.clearAll();
  }

  completed = (ev) => {
    TodoItems.complete(ev);
  }
}

const grabinput = new GrabUserInput();
export default grabinput;