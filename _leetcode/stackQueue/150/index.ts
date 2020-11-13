/**
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */
// 时间 O(n)
// 空间 O(n)
function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    const operator = ['+', '-', '*', '/']
    for (let val of tokens) {
        if (operator.indexOf(val) === -1) {
            stack.push(Number(val))
        } else {
            const right = stack.pop()
            const left = stack.pop()
            let res = 0
            if (val === '+') {
                res = left + right
            } else if (val === '-') {
                res = left - right
            } else if (val === '*') {
                res = left * right
            } else {
                res = left / right < 0 ? Math.ceil(left / right) : Math.floor(left / right)
            }
            stack.push(res)
        }
    }

    return stack.pop()
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
