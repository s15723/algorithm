/**
 * 快乐数
 * https://coding.imooc.com/lesson/82.html#mid=2666
 */
// 解法 1
// 时间 O(logn)
// 空间 O(logn)
function isHappy(n: number): boolean {
    const record = new Set<number>()
    record.add(n)
    while (n !== 1) {
        n = calc(n)

        if (!record.has(n)) {
            record.add(n)
        } else {
            return false
        }
    }

    return true
}

function calc(n: number) {
    let res = 0
    while (n) {
        let t = n % 10
        res += t * t
        n = Math.floor(n / 10)
    }

    return res
}

/**
 * 解法 2
 * 时间 O(logn)
 * 空间 O(1)
 * 我们不是只跟踪链表中的一个值，而是跟踪两个值，称为快跑者和慢跑者。在算法的每一步中，慢速在链表中前进 1 个节点，快跑者前进 2 个节点（对 getNext(n) 函数的嵌套调用）。
 * 如果 n 是一个快乐数，即没有循环，那么快跑者最终会比慢跑者先到达数字 1。
 * 如果 n 不是一个快乐的数字，那么最终快跑者和慢跑者将在同一个数字上相遇。
 */
function isHappy2(n: number): boolean {
    if (n === 1) return true

    let slow = calc(n)
    if (slow === 1) return true
    let fast = calc(slow)
    if (fast === 1) return true

    while (slow !== fast) {
        slow = calc(slow)
        fast = calc(fast)
        if (fast === 1) return true
        fast = calc(fast)
        if (fast === 1) return true
    }

    return false
}

console.log(isHappy2(2))

