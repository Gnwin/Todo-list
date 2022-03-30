import displayTodos from './DisplayTodos.js'

class TodoItems {
  constructor (todolist) {
    this.todoitems = todolist;
  }

  static addtodo(todoobj) {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    console.log(todosArr);
    todosArr.push(todoobj);
    this.todoitems = todoobj;
    console.log(this.todoitems);
    localStorage.setItem('todos', JSON.stringify(todosArr))
    this.todoitems = todosArr;
    displayTodos.display()
  }

  static deletetodo(){}
}

export default TodoItems