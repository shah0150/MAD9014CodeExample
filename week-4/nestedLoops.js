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
                }
            ]
        }
    ]
}

let books =  library.shelves;
let bookLength = books.length;

for (let i = 0; i < bookLength; i++) {
    let book = books[i];
    let bookGenre = book.bookGenre;
    let bookGenreLength = book.books.length;
    console.log("length: " + bookGenreLength);
    console.log("Genre: " + bookGenre);
    for (let j = 0; j < bookGenreLength; j++) {
        let bookTitle = book.books[j].title;
        let bookAuthor = book.books[j].author;
        console.log("Book name: " + bookTitle + " by " + bookAuthor);
    }
}