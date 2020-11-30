// 计算以 root 为根节点的二叉树的左叶子之和
function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    
    const leftVal = sumOfLeftLeaves(root.left)
    const rightVal = sumOfLeftLeaves(root.right)
    let midVal = 0
    if (root.left && !root.left.left && !root.left.right) {
        midVal = root.left.val
    }

    return leftVal + rightVal + midVal
};