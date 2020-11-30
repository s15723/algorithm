// 中序遍历
// 时间 O(n)
// 空间 O(n)
function kthSmallest(root: TreeNode | null, k: number): number {
    const list: number[] = []

    inOrder(root, list)

    return list[k - 1]
};

function inOrder(node: TreeNode | null, list: number[]) {
    if (!node) {
        return
    }
    
    inOrder(node.left, list)
    list.push(node.val)
    inOrder(node.right, list)
}