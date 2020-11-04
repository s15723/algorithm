const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (
  val: object,
  key: string | symbol
): key is keyof typeof val => hasOwnProperty.call(val, key)


const arrayInstrumentations: Record<string, Function> = {
    'push': function(...args) {
        console.log(1)
        Array.prototype.push.apply(this, args)
    }
}

Reflect.get(arrayInstrumentations, 'push')(4)