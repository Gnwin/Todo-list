import updateIndex from './UpdateIndex';

class TodoItems {
  constructor(todolist) {
    this.todoitems = todolist;
  }

  static addtodo = (todoobj, store) => {
    store.push(todoobj);
    this.todoitems = store;
    localStorage.setItem('todos', JSON.stringify(store));
    document.location.reload(true);
    return true;
  }

  static deletetodo = (todoid, store) => {
    store = store.filter((todo) => todo.index !== todoid);
    store = updateIndex(store);
    localStorage.setItem('todos', JSON.stringify(store));
    this.todoitems = store;
    document.location.reload(true);
    return store;
  }

  static edit = (description, id, store) => {
    for (let i = 0; i < store.length; i += 1) {
      if (i === id - 1) {
        store[i].description = description;
      }
    }
    this.todoitems = store;
    localStorage.setItem('todos', JSON.stringify(store));
    // document.location.reload(true);
  }

  static clearAll = (store) => {
    store = store.filter((todo) => todo.completed !== true);
    store = updateIndex(store);
    this.todoitems = store;
    localStorage.setItem('todos', JSON.stringify(store));
    // document.location.reload(true);
    return store;
  }

  static complete = (e, store) => {
    if (e.target.checked === true) {
      for (let i = 0; i < store.length; i += 1) {
        if (store[i].index === Number(e.target.parentElement.children[1].id)) {
          store[i].completed = true;
          e.target.parentElement.children[1].style.textDecoration = 'line-through';
        }
      }
    } else {
      for (let i = 0; i < store.length; i += 1) {
        if (store[i].index === Number(e.target.parentElement.children[1].id)) {
          store[i].completed = false;
          e.target.parentElement.children[1].style.textDecoration = 'none';
        }
      }
    }
    localStorage.setItem('todos', JSON.stringify(store));
    document.location.reload(true);
  }
}

export default TodoItems;