/**
 * 龟兔赛跑，快慢指针
 * 如果不是快乐数。会无限循环，快慢指针必然会相遇
 */
function isHappy(n: number): boolean {
    if (n === 1) return true

    let slow = calc(n)
    if (slow === 1) {
        return true
    }
    let fast = calc(slow)
    if (fast === 1) return true

    while (slow !== fast) {
        slow = calc(slow)
        if (slow === 1) return true
        fast = calc(fast)
        if (fast === 1) return true
        fast = calc(fast)
        if (fast === 1) return true
    }

    return false
}

function calc(n: number) {
    let res = 0
    while (n) {
        const t = n % 10
        res += t * t
        n = Math.floor(n / 10)
    }

    return res
}

isHappy(19)
