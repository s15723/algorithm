/**
 * 希尔排序 O(n^(3/2))，有时间研究下希尔排序的时间复杂度？
 */
export default function shellSort<T>(arr: T[]) {
    let n = arr.length

    // 计算 increment sequence(增量序列): 1, 4, 13, 40, 121, 364, 1093...
    let h = 1
    while (h < Math.floor(n / 3)) {
        h = 3 * h + 1
    }

    while (h >= 1) {
        for (let i = h; i < n; i++) {
            const e = arr[i]
            let j: number = i
            // arr[...,j-2h,j-h]是有序的，将arr[j] 插入
            for (; j >= h && arr[j - h] > e; j = j - h) {
                arr[j] = arr[j - h]
            }
            arr[j] = e
        }

        h = Math.floor(h / 3)
    }
}