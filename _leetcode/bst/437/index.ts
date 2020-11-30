// 在以 root 为根节点的二叉树中，寻找和为 sum 的路径，返回这样的路径个数
function pathSum(root: TreeNode | null, sum: number): number {
    if (root === null) {
        return 0
    }
    let res = findPath(root, sum)
    // 不包含 root
    res += pathSum(root.left, sum)
    res += pathSum(root.right, sum)

    return res
};

// 在以 node 为根节点的二叉树中，寻找包含 node 的路径，和为num
// 返回这样的路径个数
function findPath(node: TreeNode | null, num: number): number {
    if (node === null) {
        return 0
    }

    let res = 0
    if (node.val === num) {
        res += 1
    }
    res += findPath(node.left, num - node.val)
    res += findPath(node.right, num - node.val)

    return res
}