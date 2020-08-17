interface Person {
  name: string
  age: number
}

function printName(person: Person) {
  console.log(person.name)
}

const jonh = {
  name: 'Jonh',
  age: 21
}

const mary = {
  name: 'Mary',
  age: 21,
  phone: '1234-5678'
}

printName(jonh)
printName(mary)


interface Comparable {
  campareTo(b) : number
}

class MyObject implements Comparable {
  age: number
  compareTo(b): number {
    if(this.age === b.age) {
      return 0
    }
    return this.age > b.age ? 1 : 1
  }
}