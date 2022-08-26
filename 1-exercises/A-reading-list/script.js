function readingList(books) {
  // Write your code here...
  let parentElement = document.getElementById("content");

  books.forEach((element) => {
    let ulElement = document.createElement("ul");
    let bookTitleElement = document.createElement("li");
    bookTitleElement.innerHTML = `Book title: ${element.title}`;
    let bookAuthorElement = document.createElement("li");
    bookAuthorElement.innerHTML = `Book author: ${element.author}`;
    let bookImageElement = document.createElement("li");
    bookImageElement.innerHTML = `<img src="${element.bookCoverImage}" alt="${element.title}" width="120">`;
    ulElement.appendChild(bookTitleElement);
    ulElement.appendChild(bookAuthorElement);
    ulElement.appendChild(bookImageElement);
    parentElement.appendChild(ulElement);
    if (element.alreadyRead === false) {
      ulElement.className = "not-read-yet";
    } else if (element.alreadyRead === true) {
      ulElement.className = "already-read";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
