var deleteNode = function (node) {
    node.val = node.next.val
    const deleteNode = node.next
    node.next = deleteNode.next
    deleteNode.next = null

    return
};