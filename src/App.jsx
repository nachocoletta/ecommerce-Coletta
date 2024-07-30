import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
// import "bootstrap/dist/css/bootstrap.min.css";
import data from './data/mock.json';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/item/:id" element={<ItemDetailContainer />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
