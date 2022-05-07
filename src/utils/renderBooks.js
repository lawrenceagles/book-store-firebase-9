import createElem from "./createElem.js";

// Get DOM element
const BooksContainer = document.querySelector('#books-container');

// display books
function renderBooks(books) {
	BooksContainer.innerHTML = ''; // clears the container

	books.forEach((book) => {

		// add list items
		const bookItem = createElem(
			'li',
			{ class: 'cursor-pointer' },
			createElem(
				'span',
				{
					'data-id': book.id,
					class: 'book'
				},
				`${book.title} - ${book.author}`
			)
		);

		const bookContainer = createElem(
			'ul',
			{
				class: ''
			},
			bookItem
		);

		// appends children
		BooksContainer.append(bookContainer);
	});
}

export default renderBooks;