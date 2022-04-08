/**
 * @jest-environment jsdom
 */

 import todomarkup from '../TodoMarkup';
 import TodoItems from '../TodoItems';
 
 let store = [
  {
    description: 'laundry',
    completed: false,
    index: 1
  },
  {
    description: 'read a book',
    completed: false,
    index: 2
  },
  { 
    description: 'study',
    completed: false,
    index: 3
  },
];
 
 document.body.innerHTML = '<div class=\'list-items\'></div>';

//  console.log(Math.floor(Math.random() * (3 - 1 + 1) + 1));
 
 // edit
 describe('edits an item\'s description', () => {
   it('edits an item\'s description', () => {
    //  const number = store.length;
    let description1 = store[1].description;
    let name = '';
     TodoItems.addtodo({store);
     expect(store.length).toBe(number + 1);
   });
 
  //  it('adds a node to the DOM', () => {
  //    const todoList = document.querySelector('.list-items');
  //    let markup = '';
  //    store.forEach((todo) => {
  //      markup += todomarkup(todo);
  //    });
  //    todoList.innerHTML = markup;
  //    expect(markup).toEqual(document.body.children[0].innerHTML);
  //  });
 
  //  it('checks for a truthy value', () => {
  //    expect(TodoItems.addtodo({
  //      description: 'wash the dishes',
  //      completed: false,
  //      index: 3,
  //    }, store)).toBeTruthy();
  //  });
 });
 
 // update
 describe('remove a new todoitem', () => {
  //  beforeEach(() => {
  //    store = [];
  //    store = [
  //      { description: 'play', completed: false, index: 1 },
  //      { description: 'work', completed: false, index: 2 },
  //      { description: 'study', completed: false, index: 3 },
  //    ];
  //    const todoList = document.querySelector('.list-items');
  //    let markup = '';
  //    store.forEach((todo) => {
  //      markup += todomarkup(todo);
  //    });
  //    todoList.innerHTML = markup;
  //  });
 
  //  it('removes a new object to the store', () => {
  //    const size = store.length;
  //    store = TodoItems.deletetodo(2, store);
  //    expect(store.length).toEqual(size - 1);
  //  });
 
  //  it('item removed from the list', () => {
  //    const todoList = document.querySelector('.list-items');
 
  //    let markup = '';
  //    store.forEach((todo) => {
  //      markup += todomarkup(todo);
  //    });
  //    todoList.innerHTML = markup;
  //    const size2 = document.querySelectorAll('.space').length;
 
  //    store = TodoItems.deletetodo(2, store);
 
  //    markup = '';
  //    store.forEach((todo) => {
  //      markup += todomarkup(todo);
  //    });
  //    todoList.innerHTML = markup;
  //    const size = document.querySelectorAll('.space').length;
 
  //    expect(size).toEqual(size2 - 1);
  //  });
 });

// clearall
 describe('remove a new todoitem', () => {
  // beforeEach(() => {
  //   store = [];
  //   store = [
  //     { description: 'play', completed: false, index: 1 },
  //     { description: 'work', completed: false, index: 2 },
  //     { description: 'study', completed: false, index: 3 },
  //   ];
  //   const todoList = document.querySelector('.list-items');
  //   let markup = '';
  //   store.forEach((todo) => {
  //     markup += todomarkup(todo);
  //   });
  //   todoList.innerHTML = markup;
  // });

  // it('removes a new object to the store', () => {
  //   const size = store.length;
  //   store = TodoItems.deletetodo(2, store);
  //   expect(store.length).toEqual(size - 1);
  // });

  // it('item removed from the list', () => {
  //   const todoList = document.querySelector('.list-items');

  //   let markup = '';
  //   store.forEach((todo) => {
  //     markup += todomarkup(todo);
  //   });
  //   todoList.innerHTML = markup;
  //   const size2 = document.querySelectorAll('.space').length;

  //   store = TodoItems.deletetodo(2, store);

  //   markup = '';
  //   store.forEach((todo) => {
  //     markup += todomarkup(todo);
  //   });
  //   todoList.innerHTML = markup;
  //   const size = document.querySelectorAll('.space').length;

  //   expect(size).toEqual(size2 - 1);
  // });
});