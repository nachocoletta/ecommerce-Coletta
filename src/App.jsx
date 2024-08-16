import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Provider } from './context/ItemsContext';
import NavBar from './components/NavBar';
// import "bootstrap/dist/css/bootstrap.min.css";
import data from './data/mock.json';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
