function kthSmallest(root: TreeNode | null, k: number): number {
    let index = 0
    return _kthSmallest(root, k)!.val

    function _kthSmallest(node: TreeNode | null, k: number): TreeNode | null {
        if (!node) {
            return null
        }

        const res = _kthSmallest(node.left, k)
        if (res) {
            return res
        }

        index++
        if (index === k) {
            return node
        }

        return _kthSmallest(node.right, k)
    }
}
