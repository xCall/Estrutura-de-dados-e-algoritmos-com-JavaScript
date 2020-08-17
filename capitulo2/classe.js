/* function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn
}

Book.prototype.printTitle = () => {
  console.log(this.title)
} */

export default class Book {
  constructor(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
  }

  printTitle() {
    return this.title
  }

  printIsbn() {
    return this.isbn
  }
}

let book = new Book('title', 'pag', 'isbn')

console.log(book.title)
book.title = 'new title'
console.log(book.title)

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn)
    this.technology = technology
  }

  printTechnology() {
   return this.technology
  }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript')

console.log(jsBook.title)
console.log(jsBook.printTechnology())
console.log(jsBook.printIsbn())