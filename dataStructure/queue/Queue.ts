export default interface Queue<T> {
    // O(1)，均摊 resize()
    enqueue(item: T): void

    // arrayQueue 为 O(n)
    // loopQueue/linkedListQueue 为 O(1)
    dequeue(): T

    // O(1)
    getFront(): T

    // O(1)
    getSize(): number

    // O(1)
    isEmpty(): boolean
}
