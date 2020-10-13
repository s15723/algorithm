/**
 * 根据字符出现频率排序
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/
*/
function frequencySort(s: string): string {
    const map = new Map<string, number>()
    for (let val of s) {
        map.set(val, (map.get(val) || 0) + 1)
    }

    let sorted = [...map].sort((a, b) => {
        return b[1] - a[1]
    })
    
    let ret = []

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted[i][1]; j++) {
            ret.push(sorted[i][0])
        }
    }

    return ret.join('')
};

console.log((frequencySort('tree')))
