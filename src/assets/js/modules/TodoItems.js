import displayTodos from './DisplayTodos';
import updateIndex from './UpdateIndex';

class TodoItems {
  constructor(todolist) {
    this.todoitems = todolist;
  }

  static addtodo = (todoobj) => {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr.push(todoobj);
    this.todoitems = todoobj;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    this.todoitems = todosArr;
    displayTodos.display();
  }

  static deletetodo = (id) => {
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr = todosArr.filter((todo) => todo.index !== id);
    todosArr = updateIndex(todosArr);
    localStorage.setItem('todos', JSON.stringify(todosArr));
    this.todoitems = todosArr;
    displayTodos.display();
  }

  static edit = (description, id) => {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todosArr.length; i += 1) {
      if (i === id - 1) {
        todosArr[i].description = description;
      }
    }
    this.todoitems = todosArr;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }

  static clearAll = () => {
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr = todosArr.filter((todo) => todo.completed !== true);
    todosArr = updateIndex(todosArr);
    this.todoitems = todosArr;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }

  static complete = (e) => {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    if (e.target.checked === true) {
      for (let i = 0; i < todosArr.length; i += 1) {
        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {
          todosArr[i].completed = true;
          e.target.parentElement.children[1].style.textDecoration = 'line-through';
        }
      }
    } else {
      for (let i = 0; i < todosArr.length; i += 1) {
        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {
          todosArr[i].completed = false;
          e.target.parentElement.children[1].style.textDecoration = 'none';
        }
      }
    }
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }
}

export default TodoItems;