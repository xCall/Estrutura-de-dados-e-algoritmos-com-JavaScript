var obj = new Object()

var objeto = {}

obj = {
  name: {
    first: "Gandalf",
    last: "the Grey"
  },
  address: "Middle Earth"
}

function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn

  this.printIsbn = function() {
    console.log(this.isbn)
  }
}

var book = new Book('title', 'pag', 'isbn')

console.log(book.title)

book.title = 'new title'

console.log(book.title)

Book.prototype.printTitle = function() {
  console.log(this.title)
}
book.printTitle()
book.printIsbn()

var book2 = new Book('title', 'pag', 'isbn')

book2.printTitle()
book2.printIsbn()