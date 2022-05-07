// Import CSS
import "./main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"

// Regenerator runtime package
import "regenerator-runtime/runtime.js";

// import UI rendering logic
import { renderBooks } from "./utils/index.js";


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyADoSokOiVocQf7WsgxYe6Nt07pOhnYvgE",
	authDomain: "fir-101-f7aef.firebaseapp.com",
	projectId: "fir-101-f7aef",
	storageBucket: "fir-101-f7aef.appspot.com",
	messagingSenderId: "1094381805850",
	appId: "1:1094381805850:web:87874ed40bae6ec105cca3",
	measurementId: "G-RC12WJ85KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize service
const db = getFirestore(app);

// Ref collection
const colRef = collection(db, 'books');

// getRealtime data
onSnapshot(colRef, (snapshot) => {
	const books = [];
	snapshot.forEach((doc) => {
		books.push({
			id: doc.id,
			...doc.data(),
		})

	});

	console.log("books", books)
	renderBooks(books)
})

// event handlers
document.addEventListener(
	'click',
	function (event) {
		if (event.target.matches('.book')) {

			// get document reference
			const docRef = doc(db, 'books', event.target.dataset.id)

			if (confirm(`do you want to delete this book?`)) {

				deleteDoc(docRef).then(() => console.log("book deleted successfully!"))
			}
		}

	},

	false
);


// Get DOM Elements
const addForm = document.querySelector('#add-book');
const updateForm = document.querySelector('#update-book');

// Handle submit 
addForm.addEventListener('submit', async function handleSubmit(e) {
	// prevents form reload
	e.preventDefault();
	// get input fields
	const title = addForm.elements['title'].value;
	const author = addForm.elements['author'].value;

	// simple validation
	if (!title || !author) return; // makes sure user enters a title

	try {
		// create book
		await addDoc(colRef, { title, author });

		console.log("book added successfully!");

		addForm.reset();

	} catch (error) {
		// handle error
		console.log('Error occured', error.message);
	}
});

// Handle update 
updateForm.addEventListener('submit', async function handleSubmit(e) {
	// prevents form reload
	e.preventDefault();
	// get input fields
	const ID = updateForm.elements['id'].value;
	const title = updateForm.elements['title'].value;
	const author = updateForm.elements['author'].value;

	// simple validation
	if (!ID) return; // makes sure user enters a title

	try {
		// get document reference
		const docRef = doc(db, 'books', ID)

		// create book
		await updateDoc(docRef, { title, author });

		console.log("book updated successfully!");

		updateForm.reset();

	} catch (error) {
		// handle error
		console.log('Error occured', error.message);
	}
});