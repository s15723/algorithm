export interface Queue<T> {
  // O(1)
  enqueue(item: T): void;

  // O(1)
  dequeue(): T;

  // O(1)
  getFront(): T;

  // O(1)
  getSize(): number;

  // O(1)
  isEmpty(): boolean;
}

class LinkedNode<T> {
  public val: T;
  public next: LinkedNode<T>;

  constructor(val: T = null, next: LinkedNode<T> = null) {
    this.val = val;
    this.next = next;
  }
}

export default class LinkedListQueue<T> implements Queue<T> {
  private head: LinkedNode<T> = null;
  private tail: LinkedNode<T> = null;
  private size = 0;

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(item: T) {
    let newNode = new LinkedNode<T>(item);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail = this.tail.next = newNode;
    }
    this.size++;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from an empty queue");
    }
    let retNode = this.head;
    this.head = retNode.next;
    retNode.next = null;

    if (this.head === null) {
      this.tail === null;
    }

    this.size--;
    return retNode.val;
  }

  getFront(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.head.val;
  }

  toString() {
    let str = "Queue:front ";
    let cur = this.head;
    while (cur !== null) {
      str += `${cur.val}->`;
      cur = cur.next;
    }
    str += "null tail";
    return str;
  }
}

const loop1 = new LinkedListQueue<number>();
for (let i = 0; i < 10; i++) {
  loop1.enqueue(i);
  console.log(loop1.toString());
  if (i % 3 === 2) {
    loop1.dequeue();
    console.log(loop1.toString());
  }
}
