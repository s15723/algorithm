export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    // 一个节点，它左右子节点只要有一个，那他就不是叶子节点，
    // 就不能以它的某个空子节点为结果返回，而是应该进入有子节点的分支

    // 叶子节点
    if (!root.left && !root.right) {
        return 1
    }

    let min = Infinity
    if (root.left) {
        min = Math.min(min, minDepth(root.left))
    }
    if (root.right) {
        min = Math.min(min, minDepth(root.right))
    }

    return min + 1
}
