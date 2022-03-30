import todomarkup from './TodoMarkup.js';


class DisplayTodos {
  // eslint-disable-next-line class-methods-use-this
  display() {
    const todoStorage = JSON.parse(localStorage.getItem('todos'));
    const todoList = document.querySelector('.list-items');
    let markup = '';
    todoStorage.forEach((todo) => {
      const elemenT = todomarkup(todo);
      markup += elemenT;
    });
    todoList.innerHTML = markup;
  }
}

const displayTodos = new DisplayTodos();
export default displayTodos;