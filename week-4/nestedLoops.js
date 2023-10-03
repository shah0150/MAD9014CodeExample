const library = {
    libraryName: "Ottawa Public Library",
    location: "Centrepointe",
    shelves : [
        {
            bookGenre: "Fiction",
            books: [
                {
                    title: "Harry Potter",
                    author: "JK Rowling"
                },
                {
                    title: "Songs of Ice and Fire",
                    author: "George R.R Martin"

                }
            ]
        },
        {
            bookGenre: "Non-fiction",
            books: [
                {
                    title: "Flutter",
                    author: "Steve G"
                },
                {
                    title: "Verity",
                    author: "Collen"
                },
                {
                    title: "The Billionaire Adesh",
                    author: "Adesh Shah"
                }
            ]
        }
    ]
}

let books = library.shelves;
// console.log(books);

let bookLength = books.length;
// console.log(bookLength);

for (let i = 0; i < bookLength; i++){
    let book = books[i];
    // console.log(book);
    let bookGenre = book.bookGenre;
    console.log(bookGenre)
    let bookGenreLength = book.books.length;
    console.log(bookGenreLength);
for (let j = 0; j < bookGenreLength; j++){
    let bookTitle = book.books[j].title;
    // console.log(bookTitle);
    let bookAuthor = book.books[j].author;
    console.log("Book Name: " + bookTitle + " Book Author: " + bookAuthor);
}

}
