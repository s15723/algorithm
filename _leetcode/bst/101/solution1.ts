// 递归
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    }
    return isMirror(root, root)
};

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) {
        return true
    }
    if (!node1 || !node2) {
        return false
    }

    return (node1.val === node2.val) && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
}
