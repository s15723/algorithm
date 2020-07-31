import deepEqual from './deepEqual';

export interface MyArray<T> {
    getSize: () => number;
    getCapacity: () => number;
    isEmpty: () => boolean;

    // 增
    splice: (index: number, item: T) => void;
    push: (item: T) => void;
    unshift: (item: T) => void;

    // 查
    get: (index: number) => T;
    getFirst: () => T;
    getLast: () => T;
    contains: (item: T) => boolean;
    findIndex: (item: T) => number;

    // 改
    set: (index: number, item: T) => void;

    // 删
    remove: (index: number) => T;
    pop: () => T;
    shift: () => T;
    removeElement: (item: T) => void;

    resize: (newCapacity: number) => void;
}

export default class myArray<T> implements MyArray<T> {
    private data: T[] = [];
    private size: number = 0;

    constructor(capacity: number = 10) {
        this.data = Array(capacity);
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.data.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    splice(index: number, item: T) {
        if (index < 0 || index > this.size) {
            throw new Error('Add failed. Require index >= 0 and index <= size.');
        }

        if (this.size === this.data.length) {
            this.resize(this.data.length * 2);
        }

        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }

        this.data[index] = item;
        this.size++;
    }

    push(item: T) {
        return this.splice(this.size, item);
    }

    unshift(item: T) {
        return this.splice(0, item);
    }

    get(index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Index is illegal.');
        }
        return this.data[index];
    };

    getFirst() {
        return this.get(0);
    };

    getLast() {
        return this.get(this.size - 1);
    };

    // 对象的比较
    contains(item: T) {
        for (let i = 0; i < this.size; i++) {
            if (deepEqual(this.data[i], item)) {
                return true;
            }
        }
        return false;
    };

    // 对象的比较
    findIndex(item: T) {
        for (let i = 0; i < this.size; i++) {
            if (deepEqual(this.data[i], item)) {
                return i;
            }
        }
        return -1;
    };

    set(index: number, item: T) {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Index is illegal.');
        }
        this.data[index] = item;
    };

    remove(index: number) {
        if (index < 0 || index >= this.size)
            throw new Error("Remove failed. Index is illegal.");

        let ret = this.data[index];
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
        this.data[this.size] = null;

        if (this.size === Math.ceil(this.data.length / 4) && this.data.length / 2 !== 0) {
            this.resize(Math.ceil(this.data.length / 2));
        }

        return ret;
    };

    pop() {
        return this.remove(this.size - 1);
    }

    shift() {
        return this.remove(0);
    }

    removeElement(item: T) {
        let removed = false;
        let index = this.findIndex(item);
        if (index !== -1) {
            this.remove(index);
            removed = true;
        }
        return removed;
    }

    resize(newCapacity: number) {
        let newData: T[] = Array(newCapacity);
        for (let i = 0; i < this.data.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
}

let arr = new myArray();
arr.push({ a: 1 });
console.log(arr.findIndex({ a: 1 }));
console.log(arr.contains({ a: 1 }));