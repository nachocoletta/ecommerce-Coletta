import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';

import data from '../data/mock.json';
export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, 3000);
		})
			.then((data) => {
				if (!id) {
					setProducts(data);
				} else {
					const filtered = data.filter((prod) => prod.category === id);
					setProducts(filtered);
				}
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (data.length === 0) {
		return <h1>No hay productos disponibles...</h1>;
	}
	return (
		<div className="conatiner">
			<h1 className="display-4 text-center">Productos</h1>;
			<div className="row">
				{/* <ItemCount product="Camisa tiger" /> */}
				<ItemList products={products} />
			</div>
		</div>
	);
}
