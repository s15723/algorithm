/**
 * 反转字符串
 * https://leetcode-cn.com/problems/reverse-string/
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */

import { swap } from "../../../packages/sort/helpers";

function reverseString(s: string[]): void {
    let l = 0, r = s.length - 1
    while(l < r) {
        swap(s, l, r)
        l++
        r--
    }
};

let str = ["h","e","l","l","o"]
reverseString(str)
console.log(str)
