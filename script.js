let theHobbit = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  pages: 310,
  status: 'Not read',
}

let book1984 = {
  title: '1984',
  author: 'G. Orwell',
  pages: 328,
  status: 'Read',
}

let warPeace = {
  title: 'War and Peace',
  author: 'L. Tolstoy',
  pages: 1225,
  status: 'Read',
}

let myLibrary = [theHobbit, book1984, warPeace];

function Book(title, author, pages, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('book-info');

    let titleDiv = document.createElement('div');
    titleDiv.textContent = `${(myLibrary[i]).title}`;
    bookContainer.appendChild(titleDiv);

    let authorDiv = document.createElement('div');
    authorDiv.textContent = `${(myLibrary[i]).author}`;
    bookContainer.appendChild(authorDiv);

    let pagesDiv = document.createElement('div');
    pagesDiv.textContent = `${(myLibrary[i]).pages} pages`;
    bookContainer.appendChild(pagesDiv);

    let statusButton = document.createElement('button');
    statusButton.classList.add('status-button');
    statusButton.textContent = `${(myLibrary[i]).status}`;
    bookContainer.appendChild(statusButton);

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    bookContainer.appendChild(removeButton);

    let mainContainer = document.querySelector('#container');
    mainContainer.appendChild(bookContainer);
  }
}

function clearBooks() {
  let bookInfo = document.getElementsByClassName('book-info');
  for (let i = bookInfo.length - 1; i >= 0; i--) {
    bookInfo[i].remove();
  }
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () => {
  let inputTitle = (document.querySelector('#title')).value;
  let inputAuthor = (document.querySelector('#author')).value;
  let inputPages = (document.querySelector('#pages')).value;
  let inputStatus = (document.querySelector('#status')).value;
  if (inputTitle === '' || inputAuthor === '' || inputPages === '') {
    alert('You need to fill all the fields');
    return;
  }
  let inputBook = new Book(inputTitle, inputAuthor, inputPages, inputStatus);
  addBookToLibrary(inputBook);
  clearBooks();
  displayBooks();
  addEvent();
});

function addEvent() {
  let rbtns = document.getElementsByClassName('remove-button');
  for (let i = 0; i < rbtns.length; i++) {
    rbtns[i].addEventListener('click', () => {
      myLibrary.splice(i, 1);
      clearBooks();
      displayBooks();
      addEvent();
    });
  }
  let sbtns = document.getElementsByClassName('status-button');
  for (let i = 0; i < sbtns.length; i++) {
    sbtns[i].addEventListener('click', () => {
      (myLibrary[i].status === 'Read')? myLibrary[i].status = 'Not read' : myLibrary[i].status = 'Read';
      clearBooks();
      displayBooks();
      addEvent();
    });
  }
}

document.addEventListener('DOMContentLoaded', addEvent);

