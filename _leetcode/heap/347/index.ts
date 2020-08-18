function topKFrequent(nums: number[], k: number) {
    const map = new Map<number, number>()
    const heap: number[] = []

    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1)
        } else {
            map.set(num, 1)
        }
    })

    const leftChild = (k: number) => {
        return 2 * k + 1
    }

    const parent = (k: number) => {
        return Math.floor((k - 1) / 2)
    }

    const swap = (arr: number[], i: number, j: number) => {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }

    const siftDown = (arr: number[], k: number) => {
        while (leftChild(k) < arr.length) {
            let j = leftChild(k)

            if (
                (j + 1 < arr.length) &&
                (map.get(arr[j + 1])! < map.get(arr[j])!)
            ) {
                j++
            }

            if (map.get(arr[k])! < map.get(arr[j])!) {
                break
            }

            swap(arr, k, j)
            k = j
        }
    }

    const heapify = (arr: number[]) => {
        if (arr.length > 1) {
            for (let i = parent(arr.length - 1); i >= 0; i--) {
                siftDown(arr, i)
            }
        }
    }

    Array.from(map.keys()).forEach((val, idx) => {
        if (idx < k) {
            heap.push(val)
            if (idx === k - 1) {
                heapify(heap)
            }
        } else if (map.get(val)! > map.get(heap[0])!) {
            heap[0] = val
            siftDown(heap, 0)
        }
    })

    return heap
}

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2))