// 升序
function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null

    return buildTree(nums, 0, nums.length - 1)
};

function buildTree(nums: number[], l: number, r: number): TreeNode | null {
    if (l > r) return null
    if (l === r) return new TreeNode(nums[l])

    const mid = l + Math.floor((r - l) / 2)
    const node = new TreeNode(nums[mid])
    node.left = buildTree(nums, l, mid - 1)
    node.right = buildTree(nums, mid + 1, r)

    return node
}