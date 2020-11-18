/**
 * 有序数组的交集,重复元素交集算多个
 * O(k+j),k,j分别为num1,nums2的长度
 */
function intersection(nums1: number[], nums2: number[]): number[] {
    const n1 = nums1.length,
        n2 = nums2.length
    let i = 0,
        j = 0,
        res: number[] = []
    while (i < n1 && j < n2) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }

    return res
}
let nums1 = [1, 1, 2, 3, 4, 5],
    nums2 = [2, 2, 3, 4]
console.log(intersection(nums1, nums2))
