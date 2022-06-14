let myLibrary = [];

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
    bookDiv.classList.add('book-info')
    const bookTitle = document.createElement('div');
    bookTitle.textContent = `${book.title}`;
    bookDiv.appendChild(bookTitle);
    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = `${book.author}`;
    bookDiv.appendChild(bookAuthor);
    const bookPages = document.createElement('div');
    bookPages.textContent = `${book.pages}`;
    bookDiv.appendChild(bookPages);
    const bookStatus = document.createElement('div');
    bookStatus.textContent = `${book.status}`;
    bookDiv.appendChild(bookStatus);
    const removeButton = document.createElement('div');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '✖';
    bookDiv.appendChild(removeButton);
    container.appendChild(bookDiv);
  });
}



const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', () => {
  const titleInput = (document.querySelector('#title')).value;
  const authorInput = (document.querySelector('#author')).value;
  const pagesInput = (document.querySelector('#pages')).value;
  const statusInput = (document.querySelector('#status')).value;
  const newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
  addBookToLibrary(newBook);
  displayBook();
});
