import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCieTvHi0uCbia-iaDiQkibaXSc4zvD6TM',
	authDomain: 'my-proyect-08082024.firebaseapp.com',
	projectId: 'my-proyect-08082024',
	storageBucket: 'my-proyect-08082024.appspot.com',
	messagingSenderId: '947230997892',
	appId: '1:947230997892:web:d0283120cd82fe735e31d1',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
