/**
 * Promise 核心，有状态，根据状态改变值
 */
'use strict'

enum PromiseStatus {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

interface CallBacks {
    onFulfilled: (val) => void
    onRejected?: (reason) => void
}

class MyPromise<T> {
    private status: PromiseStatus
    private value: null
    private callbacks: CallBacks[]

    constructor(executor) {
        this.status = PromiseStatus.PENDING
        this.value = null
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        if (this.status === PromiseStatus.PENDING) {
            this.status = PromiseStatus.FULFILLED
            this.value = value
            setTimeout(() => {
                this.callbacks.map((callback) => callback.onFulfilled(value))
            })
        }
    }

    reject(reason) {
        if (this.status === PromiseStatus.PENDING) {
            this.status = PromiseStatus.REJECTED
            this.value = reason
            setTimeout(() => {
                this.callbacks.map((callback) => callback.onRejected(reason))
            })
        }
    }

    then(onFulfilled?, onRejected?) {
        if (typeof onFulfilled !== 'function') {
            onFulfilled = () => this.value
        }
        if (typeof onRejected !== 'function') {
            onRejected = (e: Error) => {
                throw e
            }
        }

        let promise = new MyPromise((resolve, reject) => {
            if (this.status === PromiseStatus.PENDING) {
                this.callbacks.push({
                    onFulfilled: (val) => {
                        this._resolvePromise(
                            promise,
                            onFulfilled(val),
                            resolve,
                            reject
                        )
                    },
                    onRejected: (reason) => {
                        this._resolvePromise(
                            promise,
                            onRejected(reason),
                            resolve,
                            reject
                        )
                    },
                })
            }

            if (this.status === PromiseStatus.FULFILLED) {
                setTimeout(() => {
                    this._resolvePromise(
                        promise,
                        onFulfilled(this.value),
                        resolve,
                        reject
                    )
                }, 0)
            }

            if (this.status === PromiseStatus.REJECTED) {
                setTimeout(() => {
                    this._resolvePromise(
                        promise,
                        onRejected(this.value),
                        resolve,
                        reject
                    )
                }, 0)
            }
        })

        return promise
    }

    _resolvePromise(promise, res, resolve, reject) {
        if (promise === res) {
            throw new TypeError('Chaining cycle detected')
        }

        try {
            if (res instanceof MyPromise) {
                // 函数式编程，下面是人们常犯的毛病
                // res.then(val => resolve(val), reason => reject(reason))
                res.then(resolve, reject)
            } else {
                resolve(res)
            }
        } catch (error) {
            reject(error)
        }
    }

    static resolve(val) {
        return new MyPromise((resolve, reject) => {
            if (val instanceof MyPromise) {
                val.then(resolve, reject)
            } else {
                resolve(val)
            }
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises: any[]) {
        const values = []
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then(
                    (value) => {
                        values.push(value)
                        if (values.length === promises.length) {
                            resolve(values)
                        }
                    },
                    (reason) => reject(reason)
                )
            })
        })
    }

    static race(promises: any[]) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then(resolve, reject)
            })
        })
    }
}

// MyPromise.resolve('shentao').then((val) => console.log(val))
let p1 = MyPromise.resolve('shentao')
let p2 = MyPromise.reject('shentao2')
// MyPromise.all([p1, p2]).then(
//     (val) => console.log(val),
//     (err) => console.log(err)
// )

let p3 = new MyPromise((resolve) => {
    setTimeout(() => {
        resolve('shentao race')
    }, 1000)
})
let p4 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('shenshen race')
    }, 2000)
})
MyPromise.race([p3, p4]).then(val => console.log(val), err => console.log('err', err))

// let p1 = new MyPromise((resolve, reject) => {
//     // setTimeout(() => {
//     resolve(100)
//     // reject('fail')
//     // })
// })

// let p2 = p1.then(
//     (val) => {
//         // return new MyPromise((resolve, reject) => {
//         //     resolve('hello')
//         //     // reject('hello fail')
//         // })
//         console.log(val)
//         return p2
//     },
//     () => {
//         return new MyPromise((resolve, reject) => {
//             resolve('2')
//             // reject('2')
//         })
//     }
// )
// .then(
//     (val) => console.log('val', val),
//     (err) => console.log('err', err)
// )
