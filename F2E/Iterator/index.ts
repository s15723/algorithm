class Counter {
    public count: number = 1
    private limits: number

    constructor(limits) {
        this.limits = limits
    }

    [Symbol.iterator]() {
        let count = this.count,
            limits = this.limits
        return {
            next() {
                if (count <= limits) {
                    return { value: count++, done: false }
                } else {
                    return { value: undefined, done: true }
                }
            },
            return() {
                console.log('exiting early')
                return {
                    value: undefined,
                    done: true,
                }
            },
        }
    }
}

let counter = new Counter(3)
let iterator = counter[Symbol.iterator]()
for (let c of counter) {
    if (c > 2) {
        break
    }
    console.log('c', c)
}
for (let c of counter) {
    console.log('c', c)
}
// for (let val of counter) {
//     if (val > 2) {
//         break
//     }
//     console.log(val)
// }
// console.log('counter', counter)
// const [a, b] = counter
// console.log(a, b)

Array.from(counter)

let set1 = new Set([1, 1, 2, 3])
const [d, e, f] = set1
console.log(d, e, f)
console.log(set1)
// 迭代器对象1
let iteratorSet1 = set1[Symbol.iterator]()
console.log(iteratorSet1.next())
console.log(iteratorSet1.next())
console.log(iteratorSet1.next())
console.log(iteratorSet1.next())
// 迭代器对象2
let iteratorSet2 = iteratorSet1[Symbol.iterator]()
console.log(iteratorSet1)
console.log(iteratorSet1 === iteratorSet2)

console.log('---------数组----------')
// let arr = [1, 2, 3]
// for (let val of arr) {
//     if (val > 2) {
//         break
//     }
//     console.log(val)
// }
// for (let val of arr) {
//     console.log(val)
// }
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
console.log('return', iter.return)
for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break
  }
}
// 1
// 2
// 3

for (let i of iter) {
  console.log(i);
}
// 4
// 5