function SuperType(name) {
    this.name = name
}

SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype)
    console.log(prototype.constructor)
    prototype.constructor = subType
    console.log(prototype.constructor)
    subType.prototype = prototype
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function () {
    console.log(this.age)
}
console.log(SubType.prototype.__proto__)
let instance1 = new SubType('shentao', 23)
instance1.sayName()
instance1.sayAge()
