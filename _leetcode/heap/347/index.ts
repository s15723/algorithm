/**
 * 在 n 个数中找出前 k 个高频元素
 * 时间复杂度 O(nlogk) < O(nlogn)
 */
function topKFrequent(nums: number[], k: number) {
    const frequency = new Map<number, number>()
    const heap: number[] = []

    // O(n)
    nums.forEach(num => {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num)! + 1)
        } else {
            frequency.set(num, 1)
        }
    })

    const parent = (k: number) => Math.floor((k - 1) / 2)

    const leftChild = (k: number) => 2 * k + 1

    // O(k)
    const heapify = (arr: number[]) => {
        const n = arr.length
        for (let i = parent(n - 1); i >= 0; i--) {
            siftDown(arr, i)
        }
    }

    // O(logk)
    const siftDown = (arr: number[], k: number) => {
        const n = arr.length
        const e = arr[k]
        while (leftChild(k) < n) {
            let j = leftChild(k)

            if (j + 1 < n && frequency.get(arr[j + 1])! < frequency.get(arr[j])!) {
                j++
            }

            if (frequency.get(e)! < frequency.get(arr[j])!) {
                break
            }

            arr[k] = arr[j]
            k = j
        }

        arr[k] = e
    }

    // O(nlogk)
    Array.from(frequency.keys()).forEach((val, idx) => {
        if (idx < k) {
            heap.push(val)
            if (idx === k - 1) {
                heapify(heap)
            }
        } else if (frequency.get(val)! > frequency.get(heap[0])!) {
            heap[0] = val
            siftDown(heap, 0)
        }
    })

    return heap
}

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2))