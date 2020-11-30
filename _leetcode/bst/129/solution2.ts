/**
 * 回溯
 * 有个经验，若返回值为原始类型，则递归函数需要直接返回原始类型的值
 * 若返回值为引用类型，可以不用返回值，直接操作，
 * 但要记得回溯的时候会清除引用中已经使用过的值，所以使用引用值时，需要拷贝副本
 */
function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0)
};

function dfs(node: TreeNode | null, tnum: number): number {
    if (!node) {
        return 0
    }

    tnum = 10 * tnum + node.val

    if (!node.left && !node.right) {
        return tnum
    } else {
        return dfs(node.left, tnum) + dfs(node.right, tnum)
    }
}