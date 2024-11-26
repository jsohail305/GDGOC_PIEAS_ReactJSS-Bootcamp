import Books from "./books.js";

function highratedbooks() {
    for (let i = 0; i < Books.length; i++) {
        if (Books[i].rating > 4.5) {
            console.log(Books[i].title);
        }
    }
}

// Function to print all book details
function Bookdetails() {
    for (let i = 0; i < Books.length; i++) {
        console.log(
            "Title: " + Books[i].title +
            ", Author: " + Books[i].author +
            ", Rating: " + Books[i].rating +
            ", Genre: " + Books[i].genre
        );
    }
}

// Function to print book titles with the genre "Fiction"
function fictionbooks() {
    for (let i = 0; i < Books.length; i++) {
        if (Books[i].genre.toLowerCase() === "fiction") {
            console.log(Books[i].title);
        }
    }
}

// Function to print a list of all authors
function bookauthors() {
    for (let i = 0; i < Books.length; i++) {
        console.log(Books[i].author);
    }
}

console.log("Books with a rating higher than 4.5:");
highratedbooks();

console.log("\nDetails of all books:");
Bookdetails();

console.log("\nFiction books:");
fictionbooks();

console.log("\nList of authors:");
bookauthors();
