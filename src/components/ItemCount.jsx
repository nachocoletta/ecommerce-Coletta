import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function ItemCount({ product }) {
	const [quantity, setQuantity] = useState(1);

	const handleClickDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleClickIncrement = () => {
		setQuantity(quantity + 1);
	};

	const onAdd = () => {
		alert(quantity);
	};

	return (
		<>
			<Container>
				<p>{product}</p>
				<div>
					<button onClick={handleClickDecrement}>-</button>
					<input value={quantity} />
					<button onClick={handleClickIncrement}>+</button>
					<button onClick={onAdd}>Agregar al carrito</button>
				</div>
			</Container>
		</>
	);
}
