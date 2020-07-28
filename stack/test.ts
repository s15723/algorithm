import ArrayStack from "./arrayStack";
import LinkedListStack, { Stack } from "./linkedListStack";

const testStack = (stack: Stack<number>, opCount: number) => {
  const startTime = Date.now();

  for (let i = 0; i < opCount; i++) {
    stack.push(Math.random());
  }

  for (let i = 0; i < opCount; i++) {
    stack.pop();
  }

  const endTime = Date.now();

  return endTime - startTime;
};

/**
 * 数组实现栈和链表实现栈时间复杂度都是 O(1)
 */
const test = () => {
    const opCount = 100000

    const arrayStack = new ArrayStack<number>()
    const time1 = testStack(arrayStack, opCount)

    const loopQueue = new LinkedListStack<number>()
    const time2 = testStack(loopQueue, opCount)

    console.log(time1, time2)
}

test()
