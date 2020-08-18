export interface Set<T> {
    add: (item: T) => void
    remove: (item: T) => void
    contains: (item: T) => boolean
    getSize: () => number
    isEmpty: () => boolean
}