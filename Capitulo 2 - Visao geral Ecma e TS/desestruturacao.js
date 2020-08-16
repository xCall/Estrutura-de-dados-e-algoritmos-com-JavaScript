let [x, y] = ['a', 'b']

console.log(x, y)

let temp = x
x = y
y = temp

console.log(x, y)

let obj = {x, y}

console.log(obj)

const hello = {
  name: 'abcd',
  printHello() {
    console.log('Hello!')
  }
}

console.log(hello.printHello())