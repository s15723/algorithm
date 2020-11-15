export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 

export function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []

    let res: number[][] = []
    let queue: [TreeNode, number][] = []
    queue.push([root, 0])

    while (queue.length) {
        const cur = queue.shift()!
        const node = cur[0]
        const level = cur[1]

        if (level === res.length) {
            res.push([])
        }

        res[level].push(node.val)

        if (node.left) {
            queue.push([node.left, level + 1])
        }
        if (node.right) {
            queue.push([node.right, level + 1])
        }
        
    }

    return res
};