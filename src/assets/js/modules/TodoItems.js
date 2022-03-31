import displayTodos from './DisplayTodos';
import updateIndex from './UpdateIndex';

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

  static deletetodo(id) {
    console.log(id);
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    console.log(todosArr)
    todosArr = todosArr.filter((todo) => todo.index !== id);
    updateIndex(todosArr);
    localStorage.setItem('todos', JSON.stringify(todosArr));
    this.todoitems = todosArr;
    displayTodos.display();
  }

  static edit(description, id) {
    const todosArr = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todosArr.length; i += 1) {
      if (i === id-1) {
        todosArr[i].description = description;
        // todosArr[i].describetodo = description;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }


}

export default TodoItems;