import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import Nav from 'react-bootstrap/Nav';
import { ItemContext } from '../context/ItemsContext';
import ItemCount from './ItemCount';
import NotFound from './NotFound';

export default function ItemDetailContainer() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	const { addItem } = useContext(ItemContext);

	const onAdd = (count) => {
		addItem({ ...product, quantity: count });
	};

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, 'products', id);

		getDoc(refDoc)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setProduct({ id: snapshot.id, ...snapshot.data() });
				} else {
					setProduct(null);
				}
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (!product) {
		return <NotFound />;
	}

	return (
		<Container className="my-4">
			<Nav.Link as={NavLink} to="/">
				<Button variant="secondary" className="mb-4">
					Back to Home
				</Button>
			</Nav.Link>
			<Card className="text-center">
				<Card.Img
					variant="top"
					src={product.pictureUrl}
					alt={product.title}
					style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
				/>
				<Card.Body className="d-flex flex-column justify-content-center">
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>
						<strong>Descripción:</strong> {product.description}
					</Card.Text>
					<Card.Text>
						<strong>Precio:</strong> ${product.price}
					</Card.Text>
					<Card.Text>
						<strong>Stock:</strong> {product.stock}
					</Card.Text>
					<ItemCount product={product} stock={product.stock} onAdd={onAdd} />
				</Card.Body>
			</Card>
		</Container>
	);
}
