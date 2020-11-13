// 时间 O(n)
// 空间 O(n)
function isValid(s: string): boolean {
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    const right = [')', '}', ']']
    const stack: string[] = []
    for (let val of s) {
        if (right.indexOf(val) === -1) {
            stack.push(val)
        } else {
            if (stack.pop() !== map.get(val)) {
                return false
            }
        }
    }

    if (stack.length) {
        return false
    } else {
        return true
    }
};