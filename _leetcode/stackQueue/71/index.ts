/**
 * https://leetcode-cn.com/problems/simplify-path/
 * 时间 O(n)
 * 空间 O(n)
 */
function simplifyPath(path: string): string {
    const stack: string[] = []
    const str = path.split('/')
    for (let val of str) {
        if (val === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else if (val !== '' && val !== '.') {
            stack.push(val)
        }
    }

    let res = ''
    for (let val of stack) {
        res += `/${val}`
    }

    return res === '' ? '/' : res
}

console.log(simplifyPath("/home//foo/"))
