
interface Book {
    id: number; // Unique identifier for the book
    title: string; // Title of the book
    author: string; // Author(s) of the book
    publicationYear: number; // Year the book was published
    genre: string; // Genre of the book
    owned: boolean; // Indicates whether the user owns the book
    notes?: string; // Optional notes or summary about the book
    rating?: number; // Optional rating given by the user (out of 5, for example)
}

const myBook: Book = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction",
    owned: true,
    notes: "A classic novel about racial injustice and moral growth.",
    rating: 4.5
};
  
console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.publicationYear);
