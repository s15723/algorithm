import ArrayStack from './arrayStack'
import LinkedListStack from './linkedListStack'
import Stack from './Stack'

function testStack(stack: Stack<number>, opCount: number) {
    let startTime = Date.now()

    for (let i = 0; i < opCount; i++) {
        stack.push(Math.random())
    }

    for (let i = 0; i < opCount; i++) {
        stack.pop()
    }

    let endTime = Date.now()

    return endTime - startTime
}

function test() {
    let opCount = 100000

    let arrayStack = new ArrayStack<number>()
    let time1 = testStack(arrayStack, opCount)

    let linkedListStack = new LinkedListStack<number>()
    let time2 = testStack(linkedListStack, opCount)

    console.log('Array Stack: ', time1)
    console.log('LinkedList Stack: ', time2)
}

test()
