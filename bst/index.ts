import BstNode from './BstNode'

export default class BST<T> {
    private root: BstNode<T> = null
    private size = 0

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }
}
