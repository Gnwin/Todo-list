// import grabinput from './GrabUserInput';

const todomarkup = (todo) => `<div class="space">
<input class="input" type="checkbox" name="${todo.description}" value="${todo.description}" id="${todo.index}">
<input class="list-title" type="text" name="${todo.description}" value=${todo.description} id="${todo.index}"/>
<img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" class="threedots"/>
<img src="https://img.icons8.com/external-others-amoghdesign/24/000000/external-bin-multimedia-solid-30px-others-amoghdesign.png" class="bin"/>
</div>`;

class DisplayTodos {
  display = () => {
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

    for (let i = 0; i < todoStorage.length; i += 1) {
      if (todoStorage[i].completed) {
        checkboxes[i].checked = true;
        inputFocus[i].style.textDecoration = 'line-through';
      }
    }

    const bins = document.querySelectorAll('.bin');

    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].onchange = grabinput.completed;
    }

    bins.forEach((bin) => {
      bin.onclick = grabinput.remove;
    });

    for (let i = 0; i < inputFocus.length; i += 1) {
      inputFocus[i].onfocus = grabinput.changeBackground;
    }

    inputFocus.forEach((element) => {
      // proper closure;
      const listItemElement = element.value;
      const makeHandler = (listItemElement) => (event) => {
        grabinput.changeValue(event, listItemElement);
      };
      element.addEventListener('change', makeHandler(listItemElement));
    });
  }
}

const displayTodos = new DisplayTodos();
export default displayTodos;