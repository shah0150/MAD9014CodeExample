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

console.table(library)