import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ItemContext } from '../context/ItemsContext';
export default function ItemCount({ product, stock, onAdd }) {
	const [quantity, setQuantity] = useState(1);

	const { addItem } = useContext(ItemContext);

	const handleClickDecrement = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	const handleClickIncrement = () => {
		if (quantity < stock) {
			setQuantity((prev) => prev + 1);
		}
	};

	const handleAdd = () => {
		onAdd(quantity);
		setQuantity(1);
	};

	return (
		<Container>
			<div>
				<button onClick={handleClickDecrement}>-</button>
				<input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
				<button onClick={handleClickIncrement}>+</button>
				<button onClick={handleAdd}>Agregar al carrito</button>
			</div>
		</Container>
	);
}
