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
    if (!root) return true
    let prev: any = null
    // 中序遍历是否有序，在遍历过程中校验
    function inOrder(node: TreeNode | null): boolean {
        if (!node) {
            return true
        }
        if (!inOrder(node.left)) {
            return false
        }
        // 扯到数字，不能简单的用 prev 来判断是否存在(0 转换为 boolean 为 false)
        if (typeof prev === 'number' && node.val <= prev) {
            return false
        }
        prev = node.val

        if (!inOrder(node.right)) {
            return false
        }

        return true
    }

    return inOrder(root)
};

const node = new TreeNode(0)
node.left = null
node.right = new TreeNode(-1)
console.log(isValidBST(node))