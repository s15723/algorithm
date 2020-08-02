export default class BstNode<T> {
    public val: T
    public left: BstNode<T> = null
    public right: BstNode<T> = null

    constructor(val: T) {
        this.val = val
    }
}
