class Stack {
    #stack;
    
    constructor() {
      this.#stack = [];
    }
  
    // put item on top of stack
    push(item) {
        this.#stack = []
  
    }
    
    // take item off the top of stack and return that item
    pop() {
        return this.#stack.pop()
    }
  
    // look at item on top of stack
    peek() {
        return this.#stack[this.#stack.length -1]
  
    }
  }
  
  module.exports = Stack; 


//  const myStack = new Stack();
// myStack.push("[");
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.push("[");
// myStack.push("{");
// console.log(myStack.peek());
// console.log(myStack);