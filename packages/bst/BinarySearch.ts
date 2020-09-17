/**
 * 二分查找法 O(logn)
 */
// 非递归
function BinarySearchNR(arr: number[], target: number) {
    let l = 0,
        r = arr.length - 1
    // 在 arr[l...r] 找到 target
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)

        if (target === arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return -1
}

// 递归
function BinarySearch(arr: number[], target: number) {
    const n = arr.length
    return _search(arr, 0, n - 1, target)
}

function _search(arr: number[], l: number, r: number, target: number) {
    if (l > r) {
        return -1
    }

    const mid = l + Math.floor((r - l) / 2)
    if (target === arr[mid]) {
        return mid
    } else if (target < mid) {
        return _search(arr, l, mid - 1, target)
    } else {
        return _search(arr, mid + 1, r, target)
    }
}

// 二分查找法, 在有序数组arr中, 查找target
// 如果找到target, 返回第一个target相应的索引index
// 如果没有找到target, 返回比target小的最大值相应的索引, 如果这个最大值有多个, 返回最大索引
// 如果这个target比整个数组的最小元素值还要小, 则不存在这个target的floor值, 返回-1
// 返回值范围 [-1...n-1]
function floor(arr: number[], target: number) {
    // 找到小于 target 的最小值的最大索引
    let l = -1,
        r = arr.length - 1
    while (l < r) {
        const mid = l + Math.floor((r - l + 1) / 2)
        console.log(`left: ${l}, right: ${r}, mid: ${mid}`)
        if (target <= arr[mid]) {
            r = mid - 1
        } else {
            l = mid
        }
    }

    if (l + 1 < arr.length && arr[l + 1] === target) {
        return l + 1
    }

    return l
}
console.log(floor([1, 2, 3, 4, 5, 6, 7, 8], 4))

// 二分查找法, 在有序数组arr中, 查找target
// 如果找到target, 返回最后一个target相应的索引index
// 如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
// 如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n
// 返回值范围 [0...n]
function ceil(arr: number[], target: number) {
    let l = 0,
        r = arr.length
    // 寻找比target大的最小索引值
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target >= arr[mid]) {
            l = mid + 1
        } else {
            r = mid
        }
    }

    if (r - 1 >= 0 && arr[r - 1] === target) {
        return r - 1
    }

    return r
}

let arr = [1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 5, 5, 6, 6, 6]
