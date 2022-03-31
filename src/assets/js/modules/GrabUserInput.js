import Todo from './Todo';
// eslint-disable-next-line import/no-cycle
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

  // eslint-disable-next-line class-methods-use-this
  remove(val) {
    val.preventDefault();
    const idx = Number(val.target.parentElement.children[1].id);
    TodoItems.deletetodo(idx);
  }

  // eslint-disable-next-line class-methods-use-this
  changeBackground(val) {
    val.preventDefault();
    const parent = val.target.parentElement;
    // console.log(document.activeElement);
    // parent.style.background = 'rgb(237 232 177)';
    // parent.children[1].style.background = 'rgb(237 232 177)';
    parent.children[2].style.display = 'none';
    parent.children[3].style.display = 'block';
  }

  // eslint-disable-next-line class-methods-use-this
  changeBlur(val) {
    val.preventDefault();
    const parent = val.target.parentElement;
    // parent.style.background = 'none';
    // parent.children[1].style.background = 'none';
    parent.children[2].style.display = 'block';
    parent.children[3].style.display = 'none';
  }

  // changeBlur1(val) {
  //   val.preventDefault();
  //   this.clicked = !this.clicked;
  //   if (this.clicked) {
  //     const parent = val.target.parentElement;
  //     parent.style.background = 'rgb(237 232 177)';
  //     return;
  //   }
  //   parent.style.background = 'none';
  // }

  // eslint-disable-next-line class-methods-use-this
  changeValue(event, description) {
    if (event.target.value === '') {
      event.target.value = description;
      return;
    }
    const idx = Number(event.target.id);
    TodoItems.edit(event.target.value, idx);
  }

  // eslint-disable-next-line class-methods-use-this
  clearAllCompleted() {
    TodoItems.clearAll();
  }

  // eslint-disable-next-line class-methods-use-this
  completed(ev) {
    TodoItems.complete(ev);
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
}

const grabinput = new GrabUserInput();
export default grabinput;