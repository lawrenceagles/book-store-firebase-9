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

	renderBooks(books)
})


// Get DOM Elements
const Form = document.querySelector('#add-book');

// Handle submit 
Form.addEventListener('submit', async function handleSubmit(e) {
	// prevents form reload
	e.preventDefault();
	// get input fields
	const title = Form.elements['title'].value;
	const author = Form.elements['author'].value;

	// simple validation
	if (!title || !author) return; // makes sure user enters a title

	try {
		// create book
		await addDoc(colRef, { title, author });

		console.log("book added successfully!");

		Form.reset();

	} catch (error) {
		// handle error
		console.log('Error occured', error.message);
	}
});


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


// // Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "cities"), {
// 	name: "Tokyo",
// 	country: "Japan"
// });

// const washingtonRef = doc(db, "cities", "DC");

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
// 	capital: true
// });
