function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if (root === null) {
        return false
    }
    
    // 叶子节点
    if (!root.left && !root.right) {
        return root.val === sum
    }
    
    if (hasPathSum(root.left, sum - root.val)) {
        return true
    }
    if (hasPathSum(root.right, sum - root.val)) {
        return true
    }
    return false
};
