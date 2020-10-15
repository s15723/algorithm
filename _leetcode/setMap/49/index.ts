/**
 * 字母异位词分组
 * https://leetcode-cn.com/problems/group-anagrams/
 * 
 * 时间 O(n*klogk)
 * 空间 O(n*k)
 */
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    let res: string[][] = []
    for (let val of strs) {
        // O(klogk)
        const key = val.split('').sort().join('')
        let mapList = map.get(key)
        if (!mapList) {
            map.set(key, (mapList = []))
        }
        map.set(key, [...mapList, val])
    }

    for (let entries of map) {
        res.push(entries[1])
    }

    return res
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))