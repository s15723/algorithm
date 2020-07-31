import myArray from '../array'
import Stack from './Stack'

// 第一种实现方式，基于动态数组
export default class ArrayStack<T> implements Stack<T> {
    private array: myArray<T>

    constructor(capacity?: number) {
        this.array = new myArray(capacity)
    }

    getSize(): number {
        return this.array.getSize()
    }

    isEmpty(): boolean {
        return this.array.isEmpty()
    }

    // 这是基于动态数组实现的栈特有的方法
    getCapacity(): number {
        return this.array.getCapacity()
    }

    push(item: T): void {
        return this.array.push(item)
    }

    pop(): T {
        return this.array.pop()
    }

    peek(): T {
        return this.array.getLast()
    }
}

const stack1 = new ArrayStack()
console.log(stack1.isEmpty())
for (let i = 0; i < 5; i++) {
    stack1.push(i)
}
stack1.pop()
console.log(stack1)
console.log(stack1.getSize())
console.log(stack1.isEmpty())
console.log(stack1.peek())
console.log(stack1.getCapacity())
console.log(stack1)
