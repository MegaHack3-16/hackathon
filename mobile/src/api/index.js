import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAjeqhInZvC-pO6QFWtfqOCWgPQJUmEN0U',
	authDomain: 'megahack3-16.firebaseapp.com',
	databaseURL: 'https://megahack3-16.firebaseio.com',
	projectId: 'megahack3-16',
	storageBucket: 'megahack3-16.appspot.com',
	messagingSenderId: '336899181388',
	appId: '1:336899181388:web:b68d93b50fdfabbcbb9de9',
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
