function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    for (let str of strs) {
        const key = str.split('').sort().join('')
        let mapList = map.get(key)!
        if (!mapList) {
            map.set(key, (mapList = []))
        }
        map.set(key, [...mapList, str])
    }

    const res: string[][] = []
    for (let val of map.values()) {
        res.push(val)
    }

    return res
};