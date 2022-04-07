/**
 * @jest-environment jsdom
 */

// import displayTodos from "../DisplayTodos";
// import grabinput from "../GrabUserInput";
// import Todo from "../Todo";
// import updateIndex from "../UpdateIndex";
import todomarkup from "../TodoMarkup";
import TodoItems from "../TodoItems";
// jest.mock("../DisplayTodos");

let store = [{
  description: 'laundry',
  completed: false,
  index: 1,
}]

document.body.innerHTML = `<div class="list-items"></div>`;

// add
describe('add a new todoitem', () => {
  it('adds a new object to the store', () => {
    const number = store.length;
    TodoItems.addtodo({
      description: 'read a book',
      completed: false,
      index: 2,
    }, store);
    // console.log(store);
    expect(store.length).toBe(number + 1);
  })

  it('adds a node to the DOM', () => {
    const todoList = document.querySelector('.list-items');
    let markup = '';
    store.forEach((todo) => {
      markup += todomarkup(todo);
    })
    todoList.innerHTML = markup;
    expect(markup).toEqual(document.body.children[0].innerHTML);
  })
  
  it('checks for a truthy value', () => {
    expect(TodoItems.addtodo({
      description: 'wash the dishes',
      completed: false,
      index: 3,
    }, store)).toBeTruthy();
  })
})

//remove
describe('remove a new todoitem', () => {
  beforeEach(() => {
    store =[];
    document.body.children[0].innerHTML = ''
    store =[
      {description: "play", completed: false, index: 1},
      {description: "work", completed: false, index: 2},
      {description: "study", completed: false, index: 3}
    ];
    const todoList = document.querySelector('.list-items');
    let markup = '';
    store.forEach((todo) => {
      markup += todomarkup(todo);
    })
    todoList.innerHTML = markup;
  })

  it('removes a new object to the store', () => {
    const size = store.length;
    store = TodoItems.deletetodo(2, store);
    expect(store.length).toEqual(size - 1);
  })

  it('item removed from the list', () => {
    const space = document.querySelectorAll('.space');
    
    // console.log(document.body.children[0].innerHTML);
    // console.log(space.length)
    console.log(markup);

  })

  // it('adds a node to the DOM', () => {
  //   const todoList = document.querySelector('.list-items');
  //   let markup = '';
  //   store.forEach((todo) => {
  //     markup += todomarkup(todo);
  //   })
  //   todoList.innerHTML = markup;
    // markup = [markup]
    // const todoitems = document.querySelectorAll('.space');
    // console.log(markup.length);
    // console.log(document.body.children[0].innerHTML.length);
    // expect(typeof markup).toEqual(typeof document.body.children[0].innerHTML);
    // expect(typeof markup).toEqual(typeof document.body.children[0].innerHTML);
  // })
  
  // test('addtest', () => {
  //   expect(TodoItems.addtodo("sleep", store)).toBeTruthy();
  // })
})
