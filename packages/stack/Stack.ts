export default interface Stack<T> {
    // O(1)
    getSize(): number

    // O(1)
    isEmpty(): boolean

    // O(1) 均摊复杂度，可能会resize
    push(item: T): void

    // O(1) 均摊复杂度，可能会resize
    pop(): T

    // O(1)
    peek(): T
}
