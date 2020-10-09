/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 'helleh'
 * https://leetcode-cn.com/problems/valid-palindrome/
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let l = 0,
        r = s.length - 1
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
