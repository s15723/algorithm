function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>()
    const heap: number[] = []

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    function parentK(k: number) {
        return Math.floor((k - 1) / 2)
    }
    
    function leftChild(k: number) {
        return 2 * k + 1
    }
    
    function heapify(arr: number[]) {
        const n = arr.length
        for (let i = parentK(n - 1); i >= 0; i--) {
            siftDown(i, arr)
        }
    }
    
    function siftDown(k: number, arr: number[]) {
        const len = arr.length
        const e = arr[k]
        while (leftChild(k) < len) {
            let j = leftChild(k)
    
            if (j + 1 < len && freq.get(arr[j + 1])! < freq.get(arr[j])!) {
                j = j + 1
            }
    
            if (freq.get(e)! <= freq.get(arr[j])!) {
                break
            }
    
            arr[k] = arr[j]
            k = j
        }
    
        arr[k] = e
    }

    // 构建一个最小堆
    for(let [key, value] of freq) {
        if (heap.length < k) {
            heap.push(key)
            if (heap.length === k) {
                heapify(heap)
            }
        } else if (value > freq.get(heap[0])!) {
            heap[0] = key
            siftDown(0, heap)
        }
    }

    return heap
}



console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1))

