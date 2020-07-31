import myArray from '../array'
import Queue from './Queue'

export default class ArrayQueue<T> implements Queue<T> {
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

    // 从这里的 getCapacity 可以看出，类的实现可以是接口的超集
    // 用户只能使用接口中定义的属性和方法，而剩下的属于类的内部属性和方法
    getCapacity(): number {
        return this.array.getCapacity()
    }

    enqueue(item: T) {
        this.array.push(item)
    }

    dequeue(): T {
        return this.array.shift()
    }

    getFront(): T {
        return this.array.getFirst()
    }
}

const queue1 = new ArrayQueue<number>()
for (let i = 0; i < 10; i++) {
    queue1.enqueue(i)
    if (i % 3 === 2) {
        queue1.dequeue()
    }
}
console.log(queue1)
