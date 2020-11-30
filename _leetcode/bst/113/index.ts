function pathSum(root: TreeNode | null, sum: number): number[][] {
    if (root === null) {
        return []
    }

    if (!root.left && !root.right) {
        if (root.val === sum) {
            return [[root.val]]
        } else {
            return []
        }
    }

    // 每次都要创建 res 数组，性能很差，使用回溯
    let res: number[][] = []
    for (let val of pathSum(root.left, sum - root.val)) {
        res.push([root.val, ...val])
    }
    for (let val of pathSum(root.right, sum - root.val)) {
        res.push([root.val, ...val])
    }

    return res
}
