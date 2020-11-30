export function deleteNode(
    root: TreeNode | null,
    key: number
): TreeNode | null {
    return _deleteNode(root, key)
}

function _deleteNode(node: TreeNode | null, key: number) {
    if (!node) {
        return null
    }

    if (key < node.val) {
        node.left = deleteNode(node.left, key)
        return node
    } else if (key > node.val) {
        node.right = deleteNode(node.right, key)
        return node
    } else {
        if (!node.left) {
            return node.right
        }

        if (!node.right) {
            return node.left
        }

        // 如果 root 左右孩子都有，那我们就要寻找前驱/后继
        let successor = findMin(node.right)
        successor.right = deleteMinNode(node.right)
        successor.left = node.left
        node.left = node.right = null

        return successor
    }
}

function findMin(node: TreeNode) {
    while (node.left) {
        node = node.left
    }
    return node
}

function deleteMinNode(node: TreeNode) {
    if (!node.left) {
        return node.right
    }
    node.left = deleteMinNode(node.left)
    return node
}
