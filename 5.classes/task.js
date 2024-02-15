class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
    }

    fix() {
        this._state *= 1.5;
    }

    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMarks(subject, marksToAdd) {
        if (marksToAdd < 2 || marksToAdd > 5) {
            return;
        }
        
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        
        this.marks[subject].push(marksToAdd);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }
        
        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        
        if (subjects.length === 0) {
            return 0;
        }
        
        const totalAverage = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
        
        return totalAverage / subjects.length;
    }
}
