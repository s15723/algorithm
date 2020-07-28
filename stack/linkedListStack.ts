import LinkedList from "../LinkedList/index";

export interface Stack<T> {
  // O(1)
  getSize(): number;

  // O(1)
  isEmpty(): boolean;

  // O(1)
  push(item: T): void;

  // O(1)
  pop(): T;

  // O(1)
  peek(): T;
}

export default class LinkedListStack<T> implements Stack<T> {
  private list = new LinkedList<T>();

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  push(item: T) {
    return this.list.addFirst(item);
  }

  pop() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.getFirst();
  }

  toString() {
    let str = "Stack top ";
    str += this.list.toString();
    return str;
  }
}

const linkedList = new LinkedListStack<number>()
for(let i = 0; i < 5; i++) {
    linkedList.push(i)
}
linkedList.pop()
console.log(linkedList.toString())