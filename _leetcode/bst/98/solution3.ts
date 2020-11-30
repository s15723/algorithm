class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function isValidBST(root: TreeNode | null): boolean {
    return _isValidBST(root, -Infinity, Infinity)
};

function _isValidBST(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) {
        return true
    }

    // 只满足左孩子值小于自己，右孩子值大于自己没用
    // 还要满足左孩子的右孩子也要小于自己(即在特定范围内)
    if (node.val < min || node.val > max) {
        return false
    }

    if (node.left && node.left.val >= node.val) {
        return false
    }

    if (node.right && node.right.val <= node.val) {
        return false
    }

    return _isValidBST(node.left, min, node.val - 1) && _isValidBST(node.right, node.val + 1, max)
}