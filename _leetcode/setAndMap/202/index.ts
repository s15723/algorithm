/**
 * 快乐数
 * https://coding.imooc.com/lesson/82.html#mid=2666
 * 
 * 时间 O(logn)
 * 空间 O(logn)
 */
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