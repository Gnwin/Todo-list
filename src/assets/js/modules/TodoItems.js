import displayTodos from './DisplayTodos';

class TodoItems {
  constructor(todolist) {
    this.todoitems = todolist;
  }

  static addtodo(todoobj) {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr.push(todoobj);
    this.todoitems = todoobj;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    this.todoitems = todosArr;
    displayTodos.display();
  }

  static deletetodo() {}
}

export default TodoItems;