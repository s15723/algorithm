let p = new Promise((resolve, reject) => {
    // resolve(100)
    reject('fail')
})
    .then(() => {})
    .then(
        (val) => {
            console.log(1)
            console.log(val)
            // throw new Error('error1')
        },
        (err1) => console.log('err1', err1)
    )
    .then(
        () => {},
        (err2) => console.log('err2', err2)
    )
console.log(2)
