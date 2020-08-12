export interface Map<K, V> {
    add(key: K, val: V): void

    remove(key: K): V

    contains(key: K): boolean

    get(key: K): V

    set(key: K, val: V): void

    getSize(): number

    isEmpty(): boolean
}