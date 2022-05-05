// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore"

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


// Get collection data
// const getBooks = async (ref) => {
// 	const querySnapshot = await getDocs(ref);
// 	const books = [];
// 	querySnapshot.forEach((doc) => {
// 		books.push({
// 			id: doc.id,
// 			...doc.data(),
// 		})

// 	});
// 	console.log("books", books)
// 	return books;
// }

// getBooks(colRef)

// getRealtime data
const getDataAsync = async () => {

	onSnapshot(colRef, (snapshot) => {
		const books = [];
		snapshot.forEach((doc) => {
			books.push({
				id: doc.id,
				...doc.data(),
			})

		});

		console.log("books", books)
		return books;

	})
}

getDataAsync();
