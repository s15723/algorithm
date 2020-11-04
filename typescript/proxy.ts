let obj = {
    message: 'Hello World',
}
let msg = new Proxy(obj, {
    get: (target, key, receiver) => {
      console.log('get')
      return Reflect.get(target, key, receiver)
    },
    set: (target, key, val) => {
      console.log('set')
      return Reflect.set(target, key, val)
    }
})
console.log(msg.message)
msg.message = 'hello'