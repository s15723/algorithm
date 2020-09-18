/**
 * 二分查找法
 */
// 非递归
function BinarySearchNR(arr: number[], target: number) {
    let l = 0, r = arr.length - 1
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target === arr[mid]) {
            return mid
        } else if (target > arr[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return -1
}

// 二分查找法, 在有序数组arr中, 查找target
// 如果找到target, 返回第一个target相应的索引index
// 如果没有找到target, 返回比target小的最大值相应的索引, 如果这个最大值有多个, 返回最大索引
// 如果这个target比整个数组的最小元素值还要小, 则不存在这个target的floor值, 返回-1
function floor(arr: number[], target: number) {
    // 找到比 target 小的最大值的最大索引
    // 取值范围 [-1...n-1]
    let l = -1, r = arr.length - 1
    while (l < r) {
        // 如果 l, r相邻，Math.floor((r - l) / 2) === 0
        // l = mid 仍为 l,会造成死循环，所以向上取值
        const mid = l + Math.floor((r - l + 1) / 2)
        if (target <= arr[mid]) {
            // mid - 1 一定小于 r,r一定会变
            // l <= mid - 1 <= r-1
            // r 一定会变
            r = mid - 1
        } else {
            // l + 1 <= mid <= r
            // l 一定会变
            l = mid
        }
    }
    // 循环完 l === r 一定成立
    if (l !== r) {
        throw new Error('error')
    }

    if (l + 1 < arr.length && arr[l + 1] === target) {
        return l + 1
    }

    return l
}

// 二分查找法, 在有序数组arr中, 查找target
// 如果找到target, 返回最后一个target相应的索引index
// 如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
// 如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n
function ceil(arr: number[], target: number) {
    // 找到比 target 大的最小值的最小索引
    // 取值范围 [0...n]
    let l = 0, r = arr.length
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target >= arr[mid]) {
            // l <= mid < r
            // l 一定会变
            l = mid + 1
        } else {
            // l <= mid < r
            // r 一定会变
            r = mid
        }
    }
    console.log(`l:${l},r:${r}`)
    // 循环完 l === r 一定成立
    if (l !== r) {
        throw new Error('error')
    }

    if (r - 1 >= 0 && arr[r - 1] === target) {
        return r - 1
    }

    // 返回 l 还是 r 无所谓，因为 l === r
    return r
}
console.log(ceil([1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 5, 5, 6, 6, 6], 2))

// 二分查找法, 在一个有序数组arr中, 寻找大于等于target的元素的第一个索引
// 如果存在, 则返回相应的索引index
// 否则, 返回arr的元素个数 n
// 相当于 lower_bound
function firstGreaterOrEqual(arr: number[], target: number) {
    let l = 0, r = arr.length
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target <= arr[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    console.log(`l:${l},r:${r}`)
    if (l !== r) {
        throw new Error('error')
    }
    return l
}

// 二分查找法, 在一个有序数组arr中, 寻找大于target的元素的第一个索引
// 如果存在, 则返回相应的索引index
// 否则, 返回arr的元素个数 n
// 相当于 upper_bound
function firstGreaterThan(arr: number[], target: number) {
    let l = 0, r = arr.length
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target < arr[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    console.log(`l:${l},r:${r}`)
    if (l !== r) {
        throw new Error('error')
    }
    return l
}

// 二分查找法, 在一个有序数组arr中, 寻找小于等于target的元素的最大索引
// 如果存在, 则返回相应的索引index
// 否则, 返回 -1
function lastLessOrEqual(arr: number[], target: number) {
    let l = -1, r = arr.length - 1
    while (l < r) {
        const mid = l + Math.floor((r - l + 1) / 2)
        if (target < arr[mid]) {
            r = mid - 1
        } else { // target >= arr[mid]
            l = mid
        }
    }
    console.log(`l:${l},r:${r}`)
    if (l !== r) {
        throw new Error('error')
    }
    return l
}

// 二分查找法, 在一个有序数组arr中, 寻找小于target的元素的最大索引
// 如果存在, 则返回相应的索引index
// 否则, 返回 -1
function lastLessThan(arr: number[], target: number) {
    let l = -1, r = arr.length - 1
    while (l < r) {
        const mid = l + Math.floor((r - l + 1) / 2)
        if (target <= arr[mid]) {
            r = mid - 1
        } else {
            l = mid
        }
    }
    console.log(`l:${l},r:${r}`)
    if (l !== r) {
        throw new Error('error')
    }
    return l
}