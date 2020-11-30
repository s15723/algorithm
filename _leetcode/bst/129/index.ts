function sumNumbers(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    if (!root.left && !root.right) {
        return root.val
    }
    let res = 0
    for (let val of dfs(root.left)) {
        res += Number(`${root.val}${val}`)
    }
    for (let val of dfs(root.right)) {
        res += Number(`${root.val}${val}`)
    }

    return res
};

function dfs(root: TreeNode | null): string[] {
    if (!root) {
        return []
    }

    if (!root.left && !root.right) {
        return [`${root.val}`]
    }

    let res: string[] = []
    for (let val of dfs(root.left)) {
        res.push(`${root.val}${val}`)
    }
    for (let val of dfs(root.right)) {
        res.push(`${root.val}${val}`)
    }

    return res
}