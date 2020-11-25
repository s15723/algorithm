// 迭代
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true
    if (!root.left && !root.right) return true
    if (!root.left || !root.right) return false

    const queue: Array<TreeNode | null> = []
    queue.push(root.left)
    queue.push(root.right)
    while (queue.length) {
        const leftNode = queue.shift()!
        const rightNode = queue.shift()!
        if (!leftNode && !rightNode) {
            continue
        }
        if (!leftNode || !rightNode) {
            return false
        }
        if (leftNode.val !== rightNode.val) {
            return false
        }
        queue.push(leftNode.left)
        queue.push(rightNode.right)
        queue.push(leftNode.right)
        queue.push(rightNode.left)
    }
    return true
};