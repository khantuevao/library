const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 385, 'Not read')
const theCounterfeitStatue = new Book('The Counterfeit Statue', 'J. Doe', 55, 'Not read')
const shotForFailure = new Book('Shot for Failure', 'M. Simon', 142, 'Read');

let myLibrary = [theHobbit, theCounterfeitStatue, shotForFailure];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${status}.`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h1');
    bookTitle.textContent = `${book.title}`;
    bookDiv.appendChild(bookTitle);
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `by ${book.author}.`;
    bookDiv.appendChild(bookAuthor);
    const bookPages = document.createElement('p');
    bookPages.textContent = `Number of pages: ${book.pages}.`;
    bookDiv.appendChild(bookPages);
    const bookStatus = document.createElement('p');
    bookStatus.textContent = `Status: ${book.status}.`;
    bookDiv.appendChild(bookStatus);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';
    bookDiv.appendChild(removeButton);
    container.appendChild(bookDiv);
  });
}

