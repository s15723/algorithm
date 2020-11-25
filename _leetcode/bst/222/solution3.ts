// 利用完全二叉树、满二叉树的特性
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    
    const leftLevel = levelNode(root.left)
    const rightLevel = levelNode(root.right)

    // 左子树已满
    if (leftLevel === rightLevel) {
        return countNodes(root.right) + (1 << leftLevel)
    } else {
        // 左子树未满
        return countNodes(root.left) + (1 << rightLevel)
    }
};

function levelNode(root:TreeNode | null): number {
    let cur = root
    let res = 0
    // dfs，利用满二叉树特性，迭代左分支到底
    while(cur) {
        res += 1
        cur = cur.left
    }
    return res
}