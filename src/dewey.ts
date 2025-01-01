
// Define the structure of a book
interface Book {
    title: string;
    author: string;
    year: number;
    isbn: string;
    subject: string; // Used to determine Dewey Decimal classification
    deweyDecimal?: string; // Optional, assigned automatically
}

// Dewey Decimal System categories
const deweyCategories: { [key: string]: string } = {
    "000": "Generalities",
    "100": "Philosophy and Psychology",
    "200": "Religion",
    "300": "Social Sciences",
    "400": "Language",
    "500": "Science",
    "600": "Technology",
    "700": "Arts and Recreation",
    "800": "Literature",
    "900": "History and Geography"
};

// Match subjects to Dewey categories
function getDeweyCategory(subject: string): string {
    const subjectToDewey: { [key: string]: string } = {
        "philosophy": "100",
        "psychology": "100",
        "religion": "200",
        "economics": "300",
        "politics": "300",
        "science": "500",
        "technology": "600",
        "art": "700",
        "literature": "800",
        "history": "900",
        "geography": "900"
    };

    const categoryKey = Object.keys(subjectToDewey).find(key =>
        subject.toLowerCase().includes(key)
    );

    return categoryKey ? subjectToDewey[categoryKey] : "000"; // Default to "000" (Generalities)
}

// Library class
class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        // Assign Dewey Decimal classification
        book.deweyDecimal = getDeweyCategory(book.subject);
        this.books.push(book);
        console.log(`Book added: ${book.title} (${book.deweyDecimal})`);
    }

    listBooks(): void {
        console.log("Library Catalog:");
        this.books.forEach(book => {
            console.log(
                `${book.title} by ${book.author} (${book.year}) - Dewey Decimal: ${book.deweyDecimal}`
            );
        });
    }

    findBooksByDewey(dewey: string): Book[] {
        return this.books.filter(book => book.deweyDecimal?.startsWith(dewey));
    }
}

// Example usage
const myLibrary = new Library();

myLibrary.addBook({
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1988,
    isbn: "9780553380163",
    subject: "science"
});

myLibrary.addBook({
    title: "The Art of War",
    author: "Sun Tzu",
    year: -500,
    isbn: "9781590302255",
    subject: "philosophy"
});

myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isbn: "9780451524935",
    subject: "political literature"
});

myLibrary.listBooks();

// Find books in a specific Dewey category
const scienceBooks = myLibrary.findBooksByDewey("500");
console.log("\nBooks in the Science category:");
scienceBooks.forEach(book => console.log(book.title));
