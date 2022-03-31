class Todo {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  // eslint-disable-next-line class-methods-use-this
  get describetodo() {
    return this.description;
  }

  set describetodo(string) {
    this.description = string;
  }

  get completetodo() {
    return this.completed;
  }
  
  set completetodo(complete) {
    this.completed = complete;
  }
}

export default Todo;


// constructor(val) {
//   this._temp = 5/9 * (val - 32);
// }
// // getter
// get temperature() {
//   return this._temp;
// }
// // setter
// set temperature(value) {
//   this._temp = value;
// }