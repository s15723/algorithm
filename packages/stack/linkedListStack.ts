import LinkedList from '../linkedList'
import Stack from './Stack'

export default class LinkedListStack<T> implements Stack<T> {
    private list: LinkedList<T> = new LinkedList()

    getSize() {
        return this.list.getSize()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    push(item: T) {
        this.list.addFirst(item)
    }

    pop() {
        return this.list.removeFirst()
    }

    peek() {
        return this.list.getFirst()
    }

    toString() {
        let res = 'Stack: top '
        res += this.list
        return res
    }
}

function test(stack: LinkedListStack<number>) {
    for (let i = 0; i < 5; i++) {
        stack.push(i)
    }
    console.log(stack.toString())

    stack.pop()
    console.log(stack.toString())
}

test(new LinkedListStack<number>())
