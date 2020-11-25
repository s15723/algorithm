// 两种解法
/**
 * 完全二叉树
 * 满二叉树 总结点数 2^h-1
 */
function countNodes(root: TreeNode | null): number {
    if (root === null) return 0

    const queue: TreeNode[] = []
    let res = 0
    queue.push(root)
    while(queue.length) {
        const curNode = queue.shift()!
        res += 1
        if (curNode.left) {
            queue.push(curNode.left)
        }
        if (curNode.right) {
            queue.push(curNode.right)
        }
    }

    return res
};