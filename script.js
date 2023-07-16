let currentPage = 1;
const itemsPerPage = 10;
let categories = [];

function computeData() {
    categories = ["Nothing", ...new Set(booksData.map(book => book.category))];
    renderCategories();
    // Initially, don't show any books
    renderBooks([]);
}

function renderCategories() {
    const categoryList = document.getElementById('category-list');
    const allButton = document.querySelector('#category-list button[data-category="all"]');
    if (allButton) {
        allButton.addEventListener('click', () => handleCategoryFilter("all"));
    }
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-light');
        button.textContent = category;
        button.dataset.category = category;
        button.addEventListener('click', () => handleCategoryFilter(category));
        categoryList.appendChild(button);
    });
}

function handleCategoryFilter(category) {
    const categoryButtons = document.querySelectorAll('#category-list button');
    categoryButtons.forEach(button => {
        if (button.dataset.category === category) {
            button.classList.add('btn-primary');
        } else {
            button.classList.remove('btn-primary');
        }
    });

    if (category === "all") {
        renderBooks(booksData);
    } else {
        const filteredBooks = booksData.filter(book => book.category === category);
        renderBooks(filteredBooks);
    }
}

function renderBooks(booksToDisplay) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = ''; // clear the current book list
    booksToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).forEach(book => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
        <p class="card-text">$${book.price}</p>
        <button class="btn btn-primary" onclick="showBookDetails(${book.id})">View Details</button>
      </div>
    `;
        booksList.appendChild(card);
    });
}

function showBookDetails(id) {
    const book = booksData.find(book => book.id === id);
    if (book) {
        const bookDetails = document.getElementById('book-details');
        bookDetails.innerHTML = `
      <h5>${book.title}</h5>
      <h6>By ${book.author}</h6>
      <p>${book.description}</p>
      <p>$${book.price}</p>
      <button class="btn btn-success" onclick="buyBook(${book.id})">Buy</button>
    `;
    }
}

function buyBook(id) {
    alert('Book purchased!');
    document.getElementById('book-details').innerHTML = '';
    document.getElementById('books-list').innerHTML = '';
    document.getElementById('category-list').innerHTML = '';
    renderCategories();
    renderBooks([]);
}

document.addEventListener('DOMContentLoaded', function () {
    computeData();
});




let booksData = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "year": 1960,
        "price": 12.99,
        "description": "A classic novel set in the Deep South, addressing racial injustice through the eyes of a young girl.",
        "image": "https://www.britishbook.ua/upload/resize_cache/iblock/965/orzkwnmxm268n16uebktklx768hn5e5q/1900_800_174b5ed2089e1946312e2a80dcd26f146/kniga_to_kill_a_mockingbird_50th_anniversary_edition.jpg"
    },
    {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "category": "Fiction",
        "year": 1949,
        "price": 10.99,
        "description": "A dystopian novel depicting a totalitarian society ruled by Big Brother.",
        "image": "https://example.com/1984.jpg"
    },
    {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Fiction",
        "year": 1925,
        "price": 9.99,
        "description": "A story set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
        "image": "https://example.com/the-great-gatsby.jpg"
    },
    {
        "id": 4,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Fiction",
        "year": 1813,
        "price": 8.99,
        "description": "A classic romance novel featuring the lively Elizabeth Bennet and the proud Mr. Darcy.",
        "image": "https://example.com/pride-and-prejudice.jpg"
    },
    {
        "id": 5,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "year": 1951,
        "price": 11.99,
        "description": "A coming-of-age novel narrated by the disillusioned teenager Holden Caulfield.",
        "image": "https://example.com/the-catcher-in-the-rye.jpg"
    },
    {
        "id": 6,
        "title": "To the Lighthouse",
        "author": "Virginia Woolf",
        "category": "Fiction",
        "year": 1927,
        "price": 10.99,
        "description": "An experimental novel exploring the inner thoughts and experiences of its characters.",
        "image": "https://example.com/to-the-lighthouse.jpg"
    },
    {
        "id": 7,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "category": "Fiction",
        "year": 1932,
        "price": 9.99,
        "description": "A dystopian novel set in a future society where human reproduction and individuality are strictly controlled.",
        "image": "https://example.com/brave-new-world.jpg"
    },
    {
        "id": 8,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fiction",
        "year": 1937,
        "price": 12.99,
        "description": "A fantasy adventure novel about Bilbo Baggins and his quest to reclaim the Lonely Mountain.",
        "image": "https://example.com/the-hobbit.jpg"
    },
    {
        "id": 9,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "category": "Fiction",
        "year": 1954,
        "price": 29.99,
        "description": "An epic high-fantasy trilogy following Frodo Baggins' journey to destroy the One Ring.",
        "image": "https://example.com/the-lord-of-the-rings.jpg"
    },
    {
        "id": 10,
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "category": "Fantasy",
        "year": 1997,
        "price": 14.99,
        "description": "The first book in the Harry Potter series, introducing the young wizard and his adventures at Hogwarts School of Witchcraft and Wizardry.",
        "image": "https://example.com/harry-potter-and-the-philosophers-stone.jpg"
    },
    {
        "id": 11,
        "title": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "category": "Fantasy",
        "year": 1950,
        "price": 19.99,
        "description": "A series of fantasy novels set in the magical world of Narnia, featuring talking animals and epic battles between good and evil.",
        "image": "https://example.com/the-chronicles-of-narnia.jpg"
    },
    {
        "id": 12,
        "title": "Animal Farm",
        "author": "George Orwell",
        "category": "Fiction",
        "year": 1945,
        "price": 8.99,
        "description": "A satirical novella depicting a group of farm animals who rebel against their human farmer, representing the events leading up to the Russian Revolution.",
        "image": "https://example.com/animal-farm.jpg"
    },
    {
        "id": 13,
        "title": "Lord of the Flies",
        "author": "William Golding",
        "category": "Fiction",
        "year": 1954,
        "price": 9.99,
        "description": "A novel about a group of boys stranded on an uninhabited island, exploring the themes of civilization, savagery, and human nature.",
        "image": "https://example.com/lord-of-the-flies.jpg"
    },
    {
        "id": 14,
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "category": "Fiction",
        "year": 1953,
        "price": 10.99,
        "description": "A dystopian novel set in a future society where books are banned and burned, following the story of a fireman who begins to question his role.",
        "image": "https://example.com/fahrenheit-451.jpg"
    },
    {
        "id": 15,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "category": "Fiction",
        "year": 1851,
        "price": 12.99,
        "description": "A novel exploring the obsession of Captain Ahab as he seeks revenge on the elusive white whale.",
        "image": "https://example.com/moby-dick.jpg"
    },
    {
        "id": 16,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "category": "Fiction",
        "year": 1939,
        "price": 11.99,
        "description": "A story following the Joad family as they migrate from Oklahoma to California during the Great Depression.",
        "image": "https://example.com/the-grapes-of-wrath.jpg"
    },
    {
        "id": 17,
        "title": "The Old Man and the Sea",
        "author": "Ernest Hemingway",
        "category": "Fiction",
        "year": 1952,
        "price": 9.99,
        "description": "A novella depicting an aging fisherman's struggle with a giant marlin in the Gulf Stream.",
        "image": "https://example.com/the-old-man-and-the-sea.jpg"
    },
    {
        "id": 18,
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "category": "Fantasy",
        "year": 1865,
        "price": 8.99,
        "description": "A whimsical tale of a young girl named Alice who falls down a rabbit hole into a fantastical world.",
        "image": "https://example.com/alices-adventures-in-wonderland.jpg"
    },
    {
        "id": 19,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "category": "Fiction",
        "year": 1967,
        "price": 13.99,
        "description": "A multigenerational novel blending reality and magical realism, following the Buendía family in the fictional town of Macondo.",
        "image": "https://example.com/one-hundred-years-of-solitude.jpg"
    },
    {
        "id": 20,
        "title": "Catch-22",
        "author": "Joseph Heller",
        "category": "Fiction",
        "year": 1961,
        "price": 10.99,
        "description": "A satirical novel depicting the absurdity and futility of war through the experiences of a U.S. Army Air Forces B-25 bombardier.",
        "image": "https://example.com/catch-22.jpg"
    },
    {
        "id": 21,
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "category": "Fiction",
        "year": 1859,
        "price": 9.99,
        "description": "A historical novel set in London and Paris before and during the French Revolution.",
        "image": "https://example.com/a-tale-of-two-cities.jpg"
    },
    {
        "id": 22,
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "category": "Fiction",
        "year": 1943,
        "price": 7.99,
        "description": "A poetic novella about a young prince who travels from planet to planet, learning important life lessons along the way.",
        "image": "https://example.com/the-little-prince.jpg"
    },
    {
        "id": 23,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "category": "Fiction",
        "year": 1884,
        "price": 8.99,
        "description": "A picaresque novel following the adventures of Huck Finn and his friend Jim, an escaped slave, as they travel down the Mississippi River.",
        "image": "https://example.com/the-adventures-of-huckleberry-finn.jpg"
    },
    {
        "id": 24,
        "title": "The Outsiders",
        "author": "S.E. Hinton",
        "category": "Fiction",
        "year": 1967,
        "price": 7.99,
        "description": "A coming-of-age novel depicting the rivalry between two groups, the Greasers and the Socs, in 1960s Oklahoma.",
        "image": "https://example.com/the-outsiders.jpg"
    },
    {
        "id": 25,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "category": "Fiction",
        "year": 1818,
        "price": 9.99,
        "description": "A Gothic science fiction novel exploring the consequences of creating artificial life.",
        "image": "https://example.com/frankenstein.jpg"
    },
    {
        "id": 26,
        "title": "The Call of the Wild",
        "author": "Jack London",
        "category": "Fiction",
        "year": 1903,
        "price": 7.99,
        "description": "A novel following the journey of a domesticated dog named Buck as he becomes a sled dog in the Yukon during the Klondike Gold Rush.",
        "image": "https://example.com/the-call-of-the-wild.jpg"
    },
    {
        "id": 27,
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "category": "Fiction",
        "year": 1936,
        "price": 12.99,
        "description": "A historical novel set in the American South during the Civil War and Reconstruction era.",
        "image": "https://example.com/gone-with-the-wind.jpg"
    },
    {
        "id": 28,
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "category": "Fiction",
        "year": 1844,
        "price": 11.99,
        "description": "An adventure novel following the story of Edmond Dantès, a man who seeks revenge on those who wronged him.",
        "image": "https://example.com/the-count-of-monte-cristo.jpg"
    },
    {
        "id": 29,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "category": "Fiction",
        "year": 1890,
        "price": 10.99,
        "description": "A philosophical novel exploring the pursuit of pleasure and the consequences of eternal youth.",
        "image": "https://example.com/the-picture-of-dorian-gray.jpg"
    },
    {
        "id": 30,
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "category": "Fiction",
        "year": 1605,
        "price": 14.99,
        "description": "A Spanish novel following the adventures of a nobleman named Alonso Quixano who loses his sanity and becomes a knight-errant.",
        "image": "https://example.com/don-quixote.jpg"
    }
];

