function invertTree(root) {
    if (root === null) {
        return null
    }

    invertTree(root.left)
    invertTree(root.right)

    const tmp = root.left
    root.left = root.right
    root.right = tmp

    return root
}