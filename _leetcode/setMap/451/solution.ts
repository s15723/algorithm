function frequencySort(s: string): string {
    const freq = new Map<string, number>()

    for (let val of s) {
        freq.set(val, (freq.get(val)! || 0) + 1)
    }

    let sorted = [...freq].sort((a,b) => b[1] - a[1])

    let ret = []

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted[i][1]; j++) {
            ret.push(sorted[i][0])
        }
    }

    return ret.join('')
};