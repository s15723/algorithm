/**
 * 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
 */
export function generateRandomArray(n: number, rangeL: number, rangeR: number) {
    if (rangeL > rangeR) {
        throw new Error('rangeL must less than rangeR')
    }

    let arr: number[] = []

    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
    }

    return arr
}

export function generateNearlyOrderedArray(n: number, swapTimes: number) {
    const arr: number[] = []
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }
    for (let i = 0; i < swapTimes; i++) {
        let a = Math.floor(Math.random() * n)
        let b = Math.floor(Math.random() * n)
        swap(arr, a, b)
    }

    return arr
}

export function printArray<T>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

export function swap<T>(arr: T[], i: number, j: number) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

export function isSorted<T>(arr: T[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }

    return true
}

export function testSort<T>(
    sortName: string,
    sortMethod: (arr: T[]) => void,
    arr: T[]
) {
    const startTime = Date.now()

    sortMethod(arr)

    const endTime = Date.now()

    if (!isSorted(arr)) {
        throw new Error(`${sortName}写错了`)
    }

    console.log(`${sortName}: ${(endTime - startTime) / 1000}`)
}
