import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

	return (
		<div className="conatiner">
			<h1 className="display-4 text-center">Productos</h1>;
			<div className="row">
				<ItemList products={products} />
			</div>
		</div>
	);
}
