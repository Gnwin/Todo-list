import updateIndex from './UpdateIndex';
import displayTodos from './DisplayTodos';

// const store = [{
//   description: 'dfdfd',
//   completed: true,
//   index: 1
// }]

class TodoItems {
  constructor(todolist) {
    this.todoitems = todolist;
  }

  static addtodo = (todoobj, store) => {
    store.push(todoobj);
    this.todoitems = store;
    localStorage.setItem('todos', JSON.stringify(store));
    document.location.reload(true);
    // displayTodos.display();
    return true;
  }

  static deletetodo = (todoid) => {
    console.log(todoid);
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr = todosArr.filter((todo) => todo.id !== todoid );
    todosArr = updateIndex(todosArr);
    localStorage.setItem('todos', JSON.stringify(todosArr));
    this.todoitems = todosArr;
    document.location.reload(true);
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
    document.location.reload(true);
  }

  static clearAll = () => {
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr = todosArr.filter((todo) => todo.completed !== true);
    todosArr = updateIndex(todosArr);
    this.todoitems = todosArr;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    document.location.reload(true);
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
    document.location.reload(true);
  }
}

export default TodoItems;