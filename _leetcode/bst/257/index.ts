function binaryTreePaths(root: TreeNode | null): string[] {
    if (root === null) {
        return []
    }

    if (!root.left && !root.right) {
        return [`${root.val}`]
    }

   let res: string[] = []
   for (let val of binaryTreePaths(root.left)) {
       res.push(`${root.val}->${val}`)
   }
   for (let val of binaryTreePaths(root.right)) {
       res.push(`${root.val}->${val}`)
   }

   return res
};