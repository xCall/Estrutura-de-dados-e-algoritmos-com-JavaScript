let params = [3, 4, 5]

function sum(a, b) {
  return a + b
}

console.log(sum(...params))

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length
}

console.log(restParamaterFunction(1, 2, 'Hello', true, 7))

function restParamaterFunction2(x, y) {
  var a = Array.prototype.slice.call(arguments, 2)
  return (x + y) * a.length
}

console.log(restParamaterFunction2(1, 2, 'Hello', true, 7))