const { Stack, Queue } = require('./dataStructures');

test('Stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  expect(stack.getItems()).toEqual([1, 2]);
});

test('Queue', () => {
  const queue = new Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
  queue.dequeue();
  expect(queue.getItems()).toEqual(['b', 'c']);
});