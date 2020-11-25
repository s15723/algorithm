// 自底向下，后序遍历(最优解)
function isBalanced(root: TreeNode | null): boolean {
    return depth(root) !== -1
};

function depth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    const leftDepth = depth(root.left)
    if (leftDepth === -1){
        return -1
    }
    const rightDepth = depth(root.right)
    if (rightDepth === -1) {
        return -1
    }
    return Math.abs(leftDepth - rightDepth) <= 1 ? 1 + Math.max(leftDepth, rightDepth) : -1
}