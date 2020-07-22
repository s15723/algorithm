class LinkedList<T> {
    private LinkedNode = class LinkedNode {
        public val: T
        public next: LinkedNode

        constructor(val: T = null, next: LinkedNode = null) {
            this.val = val
            this.next = next
        }
    }
}