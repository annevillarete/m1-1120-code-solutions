var books = [
  {
    'isbn': '9780848832919',
    'title': 'The Catcher in the Rye',
    'author': 'Jerome David Salinger'
  },

  {
    'isbn': '9783125788657',
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee'
  },
  {
    'isbn': '9780685108871',
    'title': 'The Great Gatsby',
    'author': 'Francis Scott Fitzgerald'
  }
  ];
console.log('books:', books)
console.log('type of books:', typeof books)

var json = JSON.stringify({books});
console.log(json)
console.log('typeof json:', typeof json)

var student = '{"numberID":"888","stringName":"Anne Villarete"}'
console.log(student)
console.log(typeof student)

var jsonparse = JSON.parse(student)
console.log(jsonparse)
console.log(typeof jsonparse)
