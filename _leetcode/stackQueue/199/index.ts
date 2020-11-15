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

export function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return []

    let res: number[] = []
    let queue: TreeNode[] = []
    queue.push(root)

    while (queue.length) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }

            if (i === size - 1) {
                res.push(node.val)
            }
        }
    }
    return res
}
