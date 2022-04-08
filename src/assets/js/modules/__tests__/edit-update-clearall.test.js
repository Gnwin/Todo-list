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
 describe('clears all completed activities', () => {
  it('removes a new object from the store', () => {
    expect(TodoItems.clearAll(store)).not.toBe(store);
  });

  it('removes a todolist item from the DOM', () => {
    let newStore = TodoItems.clearAll(store);
    const todoList = document.querySelector('.list-items');
    let markup = '';
    newStore.forEach((todo) => {
      markup += todomarkup(todo);
    });
    todoList.innerHTML = markup;
    const inputs = document.querySelectorAll('.list-title');
    expect(inputs.length).toEqual(store.length - 1);
  });
});