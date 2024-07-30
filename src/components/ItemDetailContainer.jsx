import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import products from '../data/mock.json';
export default function ItemDetailContainer() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		new Promise((resolve, reject) =>
			setTimeout(() => {
				resolve(product);
			}, 3000)
		)
			.then(() => {
				let findedProduct = products.find((prod) => prod.id === Number(id));
				setProduct(findedProduct);
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (!product) {
		return <h1>Producto no encontrado...</h1>;
	}

	return (
		<Container>
			<Nav.Link as={NavLink} to="/">
				<button>Back to Home</button>
			</Nav.Link>
			<h1>Detalle del producto</h1>
			<h2>{product.title}</h2>
			<p>Descripción</p>
			<p>{product.description}</p>
			<p>Precio: ${product.price}</p>
			<p>Stock: {product.stock}</p>
			<img src={product.pictureUrl} alt={product.title} />
		</Container>
	);
}
