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
    this.todoitems = todosArr;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }

  static clearAll() {
    let todosArr = JSON.parse(localStorage.getItem('todos'));
    todosArr = [];
    this.todoitems = todosArr;
    localStorage.setItem('todos', JSON.stringify(todosArr));
    displayTodos.display();
  }

  static complete(e) {
    let todosArr = JSON.parse(localStorage.getItem('todos'));

    console.log(e.target.parentElement.children[1]);
    console.log((e.target.checked === true));

    if (e.target.checked === true) {
      console.log('yes');
      console.log(typeof todosArr[0].index);
      // console.log(todosArr[0].id);
      for (let i = 0; i < todosArr.length; i += 1) {
        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {
          todosArr[i].completed = true;
          e.target.parentElement.children[1].style.textDecoration = 'line-through';
          

          localStorage.setItem('todos', JSON.stringify(todosArr));
          // displayTodos.display();
        }
      }
    } else if (e.target.checked === false) {
      console.log('no');
      for (let i = 0; i < todosArr.length; i += 1) {
        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {
          todosArr[i].completed = false;
          e.target.parentElement.children[1].style.textDecoration = 'none';


          localStorage.setItem('todos', JSON.stringify(todosArr));
          // displayTodos.display();
        }
      }
      
    }

  
  }




    // let checked = false;
    //   checkbox.addEventListener('change', () => {
    //     checked = !checked;
    //     if (checked) {
    //       inputValue.style.textDecoration = 'line-through';
    //     } else {
    //       inputValue.style.textDecoration = 'none';
    //     }
    //   })  

    // let checked = false;
    //   checkboxes[i].addEventListener('change', () => {
    //     checked = !checked;
    //     if (checked) {
    //       inputFocus[i].style.textDecoration = 'line-through';
    //     } else {
    //       inputFocus[i].style.textDecoration = 'none';
    //     }
    //   })

}

export default TodoItems;