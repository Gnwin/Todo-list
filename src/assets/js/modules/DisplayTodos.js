import todomarkup from './TodoMarkup';
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
    const tododivs = document.querySelectorAll('.space');
    const inputFocus = document.querySelectorAll('.list-title');
    console.log(inputFocus);
    const bins = document.querySelectorAll('.bin');
    console.log(bins);
    bins.forEach((bin)=> {
      bin.onclick = grabinput.remove;
    })

    for (let i = 0; i < tododivs.length; i += 1) {
      // if (inputFocus[i] === document.activeElement ) {
      //   bins[i].style.display = 'block';
      //   grabinput.changeBackground(inputFocus[i])
      // }
      // console.log(document.activeElement);
      // inputFocus[i].style.background = 'rgb(237 232 177)';
      inputFocus[i].onfocus = grabinput.changeBackground;
      inputFocus[i].onblur = grabinput.changeBlur;
      // tododivs[i].onclick = grabinput.changeBackground;
      // tododivs[i].onblur = grabinput.changeBlur;
    }
    
    inputFocus.forEach((element) => {
      // proper closure;
      let initialDescription = element.value;
      let make_handler = function(initialDescription) {
        return function (event) {
          // event and extra_data will be available here
          grabinput.changeValue(event, initialDescription);
        };
      };
      element.addEventListener("change", make_handler(initialDescription))
    })


  }
}

const displayTodos = new DisplayTodos();
export default displayTodos;