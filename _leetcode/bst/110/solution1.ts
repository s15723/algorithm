/**
 * 平衡二叉树：每一个节点的左右子树的高度差不超过1
 * 自定向上，前序遍历
 */
function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true
    
    const leftLevel = levelNode(root.left)
    const rightLevel = levelNode(root.right)

    return Math.abs(leftLevel - rightLevel) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function levelNode(root:  TreeNode | null): number {
    if (root === null) {
        return 0
    }

    return Math.max(levelNode(root.left), levelNode(root.right)) + 1
}