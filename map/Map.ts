/**
 * 有序映射，基于二分搜索树实现，因为有序，能力更大，所以时间复杂度更高(相对基于 hash 表实现的无序映射)
 * 
 * 无序映射，基于链表实现的太慢了，这里不算
 * 基于 hash 表实现的无序映射很快
 */
export interface Map<K, V> {
    add(key: K, val: V): void

    remove(key: K): V

    contains(key: K): boolean

    get(key: K): V

    set(key: K, newVal: V): void

    getSize(): number

    isEmpty(): boolean
}