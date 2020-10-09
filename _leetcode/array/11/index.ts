/**
 * 盛最多水的容器
 * https://leetcode-cn.com/problems/container-with-most-water/
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
function maxArea(height: number[]): number {
    let l = 0,
        r = height.length - 1
    let volume = calcVolumn(height, l, r)

    while (l < r) {
        if (height[l] <= height[r]) {
            l++
        } else {
            r--
        }
        let newVolumn = calcVolumn(height, l, r)
        volume = Math.max(volume, newVolumn)
    }

    return volume
}

function calcVolumn(height: number[], l: number, r: number) {
    return (r - l) * Math.min(height[l], height[r])
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
