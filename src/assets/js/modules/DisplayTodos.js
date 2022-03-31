import todomarkup from './TodoMarkup';
// eslint-disable-next-line import/no-cycle
import grabinput from './GrabUserInput';

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
    const checkboxes = document.querySelectorAll('.input[type="checkbox"]');
    const inputFocus = document.querySelectorAll('.list-title');
    // const form = document.querySelector('.form');

    for (let i = 0; i < todoStorage.length; i += 1) {
      if (todoStorage[i].completed) {
        checkboxes[i].checked = true;
        inputFocus[i].style.textDecoration = 'line-through';
      }
    }

    const bins = document.querySelectorAll('.bin');

    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].onchange = grabinput.completed;
      // let checked = false;
      // checkboxes[i].addEventListener('change', () => {
      //  checked = !checked;
      //  if (checked) {
      //    inputFocus[i].style.textDecoration = 'line-through';
      //  } else {
      //    inputFocus[i].style.textDecoration = 'none';
      //  }
      // })
    }

    bins.forEach((bin) => {
      bin.onclick = grabinput.remove;
    });

    for (let i = 0; i < inputFocus.length; i += 1) {
      inputFocus[i].onfocus = grabinput.changeBackground;
      // inputFocus[i].onblur = grabinput.changeBlur;
    }

    inputFocus.forEach((element) => {
      // proper closure;
      const listItemElement = element.value;
      const makeHandler = (listItemElement) => (event) => grabinput.changeValue(event, listItemElement);
      element.addEventListener('change', makeHandler(listItemElement));
    });
  }
}

const displayTodos = new DisplayTodos();
export default displayTodos;