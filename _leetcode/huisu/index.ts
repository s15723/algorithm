let c = 0

function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}

const extendValWithRule = (newVal: any, oldVal: any, extendKeys) => {
    for (let extendKey in extendKeys) {
        for (let key in oldVal) {
            if (key === extendKey) {
                const extendVal = extendKeys[extendKey]
                if (Array.isArray(extendVal)) {
                    const list = newVal[key] = []
                    const oldList = oldVal[key]
                    for (let i = 0; i < oldList.length; i++) {
                        const item = list[i] = {}
                        extendValWithRule(item, oldList[i], extendVal[0])
                    }
                } else if (isPlainObject(extendVal)) {
                    newVal[key] = {}
                    extendValWithRule(newVal[key], oldVal[key], extendVal)
                } else {
                    newVal[key] = oldVal[key]
                }
            }
        }
    }
}

const newVal = {items: []}
const oldVal = {items: [{content: 1}, {content: 2}, {content: 3}]}
const extendKeys = {
    items: [{content: null}]
}
extendValWithRule(newVal, oldVal, extendKeys)
console.log('newVal', newVal)