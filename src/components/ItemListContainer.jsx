import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';

import {
	getFirestore,
	getDocs,
	collection,
	query,
	where,
} from 'firebase/firestore';

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refCollection = !id
			? collection(db, 'products')
			: query(collection(db, 'products'), where('category', '==', id));

		getDocs(refCollection)
			.then((snapshot) => {
				setProducts(
					snapshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() };
					})
				);
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	// if (data.length === 0) {
	// 	return <h1>No hay productos disponibles...</h1>;
	// }
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
