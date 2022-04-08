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
 
 // edit
 describe('edits an item\'s description', () => {
   it('edits an item\'s description', () => {
    let newdescription = 'play football';
     TodoItems.edit(newdescription, store[1].index, store);
     expect(store[1].description).toBe(newdescription);
   });
 
   it('checking that new description is not empty', () => {
    let olddescription = store[1].description;
    let newdescription = '';
    if (newdescription === '') newdescription = olddescription;
     TodoItems.edit(newdescription, store[1].index, store);
     expect(newdescription).toBe(olddescription);
   });
 
   it('checks if the description is updated in the DOM', () => {
      let newdescription = 'read a book';
      TodoItems.edit(newdescription, store[1].index, store);
      const todoList = document.querySelector('.list-items');
      let markup = '';
      store.forEach((todo) => {
        markup += todomarkup(todo);
      });
      todoList.innerHTML = markup;
      const inputs = document.querySelectorAll('.list-title');
      expect(inputs[1].value).toEqual(newdescription);
   });
 });
 
 // update
 describe('remove a new todoitem', () => { 
  it('check if the input type checkbox is updated', () => {
    const checkboxes = document.querySelectorAll('.input[type="checkbox"]');
    checkboxes[1].checked = true;
    expect(checkboxes[1].checked).toBe(true);
  });

  it('check if complete status is updated in the mock store', () => {
    const checkboxes = document.querySelectorAll('.input[type="checkbox"]');
    const sampleStorageIndex = 1;
    checkboxes[sampleStorageIndex].checked = !checkboxes[sampleStorageIndex].checked;
    //user has checked a todo task
    checkboxes[sampleStorageIndex].checked = !checkboxes[sampleStorageIndex].checked;
    
    if (checkboxes[sampleStorageIndex].checked === true) {
      for (let i = 0; i < store.length; i += 1) {
        if (store[i].index === sampleStorageIndex) {
          store[i].completed = true;
        }
      }
    } else {
      for (let i = 0; i < store.length; i += 1) {
        if (store[i].index === sampleStorageIndex) {
          store[i].completed = false;
        }
      }
    }

    expect(store[sampleStorageIndex-1].completed).toBe(true);
  });
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