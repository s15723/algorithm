// 所有二叉树通用
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    const countLeft = countNodes(root.left)
    const countRight = countNodes(root.right)

    return 1 + countLeft + countRight
};