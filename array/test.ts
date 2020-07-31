/**
 * 测试 for 循环的跳出规则
 * 跳出是 break, continue
 * return 是函数直接返回
 */
function test() {
    for (let i = 0; i < 10; i++) {
        if (i < 5) {
            return i;
        }
    }
}

console.log(test());