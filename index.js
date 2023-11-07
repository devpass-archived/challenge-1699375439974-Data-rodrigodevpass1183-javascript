const { Stack, Queue } = require('./dataStructures');

// Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log('Stack:', stack.getItems());

// Queue
const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.dequeue();
console.log('Queue:', queue.getItems());