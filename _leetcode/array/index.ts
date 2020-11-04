function merge(arr1: number[], arr2: number[]) {
    const n1 = arr1.length, n2 = arr2.length
    arr1 = arr1.sort()
    arr2 = arr2.sort()

    let i = 0, j = 0
    while(i < n1 && j < n2) {
        if (arr1[i] === arr2[j])  {
            j++
        } else if (arr1[i] > arr2[j]) {
            arr1.push(arr2[j])
            while(arr2[j] === arr2[j+1]) {
                j++
            }
            j++
        } else {
            i++
        }
    }

    while(j < n2) {
        arr1.push(arr2[j])
        while(arr2[j] === arr2[j+1]) {
            j++
        }
        j++
    }

    return arr1
}

const arr1 = [1,2,10,7],arr2 = [3, 4,4,5,6]
console.log(merge(arr1, arr2))