import {TreeNode} from '../TreeNode'

// 时间 O(n)
// 空间 O(n)
function isValidBST(root: TreeNode | null): boolean {
    const list: number[] = []
    inOrder(root, list)
    for (let i = 1; i < list.length; i++) {
        if (list[i - 1] >= list[i]) {
            return false
        }
    }
    return true
};

function inOrder(node: TreeNode | null, list: number[]) {
    if (node === null) {
        return
    }
    inOrder(node.left, list)
    list.push(node.val)
    inOrder(node.right, list)
}