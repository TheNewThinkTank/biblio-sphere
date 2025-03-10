
// import { loadBooksFromDirectory } from './bookLoader';
import { loadBooksFromGoogleDrive } from './googleDriveLoader';

export interface Book {
    title: string;
    author: string;
    year: number;
    isbn: string;
    subject: string;
    deweyDecimal?: string;
}

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

export function getDeweyCategory(subject: string): string {
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

    return categoryKey ? subjectToDewey[categoryKey] : "000";
}

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        book.deweyDecimal = getDeweyCategory(book.subject);
        this.books.push(book);
        // console.log(`Book added: ${book.title} (${book.deweyDecimal})`);
    }

    getBooks(): Book[] {
        return this.books;
    }

    printBooks(): void {
        console.log("Library Catalog:");
        this.books.forEach(book => {
            const category = deweyCategories[book.deweyDecimal?.slice(0, 3) || "000"];
            console.log(
                `${book.title} by ${book.author} (${book.year}) - Dewey Decimal: ${book.deweyDecimal} (${category})`
            );
        });
    }

	filterByDewey(dewey: string): Book[] {
		return this.books.filter(book => book.deweyDecimal === dewey);
	}

	sortBooksBy(field: keyof Book): void {
		this.books.sort((a, b) => {
			const valueA = a[field] ?? ''; // Fallback to an empty string if undefined
			const valueB = b[field] ?? ''; // Fallback to an empty string if undefined

			if (valueA > valueB) return 1;
			if (valueA < valueB) return -1;
			return 0; // They are equal
		});
	}

}

// Example usage
const myLibrary = new Library();


// const books = loadBooksFromDirectory('../books'); // Directory containing JSON files
// books.forEach(book => myLibrary.addBook(book));
// myLibrary.listBooks();

// loadBooksFromGoogleDrive().then(books => {
//     books.forEach(book => myLibrary.addBook(book));
//     myLibrary.printBooks();
// });

// myLibrary.sortBooksBy('author'); // Sorts by author name
// myLibrary.listBooks();

// myLibrary.sortBooksBy('year'); // Sorts by publication year
// myLibrary.listBooks();
