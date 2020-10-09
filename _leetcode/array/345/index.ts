/**
 * 反转字符串中的元音字母
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
function swap<T>(arr: T[], i: number, j: number) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
function reverseVowels(s: string): string {
    let l = 0,
        r = s.length - 1,
        strArr = Array.from(s)

    while (l < r) {
        if (isVowels(s[l])) {
            if (isVowels(s[r])) {
                swap(strArr, l, r)
                l++
            }
            r--
        } else {
            l++
        }
        // while (!isVowels(s[l])) {
        //     l++
        // }
        // while (!isVowels(s[r])) {
        //     r--
        // }

        // if (l > r) {
        //     break
        // }

        // swap(strArr, l, r)
        // l++
        // r--
    }

    return strArr.join('')
}

function isVowels(val: string) {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    return vowelsSet.has(val)
}

console.log(reverseVowels('hello'))
