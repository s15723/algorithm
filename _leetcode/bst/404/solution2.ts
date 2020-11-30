function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    const queue: TreeNode[] = []
    queue.push(root)

    let sum = 0
    while (queue.length) {
        const curNode = queue.shift()!
        if (curNode.left && !curNode.left.left && !curNode.left.right) {
            sum += curNode.left.val
        }
        if (curNode.left) {
            queue.push(curNode.left)
        }
        if (curNode.right) {
            queue.push(curNode.right)
        }
    }

    return sum
};