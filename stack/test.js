function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    const val1 = obj1[key]
    const val2 = obj2[key]
    const areObjects = isObject(val1) && isObject(val2)

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }

  return true
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

const hero1 = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};
const hero2 = {
  name: "Batman",
  address: {
    city: "Gotham",
  }
}

console.log(hero1 == hero2)
console.log(deepEqual(hero1, hero2))