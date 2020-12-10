function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []

    const map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ])

    const res: string[] = []
    function findCombinations(digits: string, index: number, s: string) {
        if (index === digits.length) {
            res.push(s)
            return
        }
        const char = digits[index]
        const letters = map.get(char)!
        for (let letter of letters) {
            findCombinations(digits, index + 1, s + letter)
        }
        return
    }
    findCombinations(digits, 0, '')

    return res
};