class Todo {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

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