function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true

    const stack: Array<TreeNode> = []
    const lower: number[] = []
    const upper: number[] = []
    stack.push(root)
    lower.push(-Infinity)
    upper.push(Infinity)
    while(stack.length) {
        const cur = stack.pop()!
        const min = lower.pop()!
        const max = upper.pop()!

        if (cur.val < min || cur.val > max) {
            return false
        }

        if (cur.right) {
            if (cur.right.val <= cur.val) return false
            stack.push(cur.right)
            lower.push(cur.val + 1)
            upper.push(max)
        }

        if (cur.left) {
            if (cur.left.val >= cur.val) return false
            stack.push(cur.left)
            lower.push(min)
            upper.push(cur.val - 1)
        }
    }

    return true
};