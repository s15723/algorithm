export default class myArray<T> {
  private data: T[]
  // size表示数组中有多少个元素，size指向数组中第一个没有元素的位置，最大为 data.length
  private size: number = 0

  constructor(capacity: number = 10) {
    this.data = Array<T>(capacity)
  }

  getSize(): number {
    return this.size
  }

  getCapacity(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  // O(1)
  push(...items: T[]): void {
    this.splice(this.size, 0, ...items)
  }

  // O(n)
  unshift(...items: T[]): void {
    this.splice(0, 0, ...items)
  }

  // 添加函数
  // 平均 O(n/2) ==> O(n)
  splice(index: number, howmany: number, ...items: T[]): void {
    // 添加操作，为了保证数组的连续性，最大只能在 size 处添加元素(相当于push)
    if (index < 0 || index > this.size) {
      throw new Error(`index需要大于0，不大于${this.size}`)
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + items.length] = this.data[i]
    }

    for (let i = 0; i < items.length; i++) {
      this.data[index + i] = items[i]
      this.size++
      if (this.size === this.data.length) {
        this.resize(this.data.length * 2)
      }
    }
  }

  // O(1)
  get(index: number): T {
    // 元素 index 为 0 - size -1
    if (index < 0 || index >= this.size) {
      throw new Error(`index必须大于0，小于${this.size}`)
    }
    return this.data[index]
  }

  getFirst(): T {
    return this.get(0)
  }

  getLast(): T {
    return this.get(this.size - 1)
  }

  // O(1)
  // 数组的最大优势，支持随机访问
  set(index: number, item: T): void {
    if (index < 0 || index > this.size) {
      throw new Error(`index必须大于0，小于等于${this.size}`)
    }
    this.data[index] = item
    if (index === this.size) {
      this.size++
    }
  }

  // O(n)
  includes(item: T): boolean {
    return this.data.some(_item => _item === item)
  }

  // 设计为寻找第一个值为 item 的 index
  // O(n)
  findIndex(item: T): number {
    let index = -1
    this.data.some((_item, idx) => {
      if (_item === item) {
        index = idx
        return true
      }
    })
    return index
  }

  // 删除函数
  // O(n/2) ==> O(n)
  remove(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error(`index必须大于0，小于${this.size}`)
    }

    let ret = this.data[index]

    for (let i = index + 1; i <= this.size; i++) {
      this.data[i - 1] = this.data[i]
    }

    this.size--

    if ((this.size === Math.floor(this.data.length / 4)) && (this.data.length / 2 !== 0)) {
      this.resize(Math.floor(this.data.length / 2))
    }

    return ret
  }

  // O(1)
  pop(): T {
    return this.remove(this.size - 1)
  }

  // O(n)
  shift(): T {
    return this.remove(0)
  }

  // 删除的是第一个值为 item 的元素，因为 findIndex 设计为找到第一个值为 item 的 index
  removeElement(item: T): boolean {
    let removeSuccess = false
    let index = this.findIndex(item)

    if (index !== -1) {
      this.remove(index)
      removeSuccess = true
    }

    return removeSuccess
  }

  resize(newCapacity: number): void {
    let newData = Array<T>(newCapacity)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }
}

const arr: myArray<number> = new myArray(10)
arr.push(2)
arr.push(3)
arr.splice(2, 0, 4, 5, 6, 7, 8)
arr.unshift(1)
arr.unshift(0)
arr.set(9, 9)
console.log(arr.getSize())
console.log(arr.getCapacity())
console.log(arr)
console.log(arr.includes(3))
console.log(arr.findIndex(2))
console.log(arr.remove(2))
arr.pop()
arr.shift()
console.log(arr)
console.log(arr.removeElement(8))
console.log(arr)
console.log(arr.removeElement(8))

arr.removeElement(1)
console.log(arr)

arr.unshift(0, 1, 2)
arr.push(8, 9)
console.log(arr)

arr.push(10)
console.log(arr)
console.log(arr.getCapacity())

arr.unshift(-1)
console.log(arr)
console.log(arr.getCapacity())

arr.pop()
console.log(arr)
console.log(arr.getCapacity())

arr.shift()
console.log(arr)
console.log(arr.getCapacity())

arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
console.log(arr)
console.log(arr.getCapacity())


const newArr = new myArray<number>(5)
console.log(newArr)
console.log(newArr.getCapacity())

newArr.push(1, 2, 3, 4, 5)
newArr.pop()
newArr.pop()
newArr.pop()
console.log(newArr)
console.log(newArr.getCapacity())


