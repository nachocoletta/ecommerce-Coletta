import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ItemContext } from '../context/ItemsContext';
export default function ItemCount({ product }) {
	const [quantity, setQuantity] = useState(1);

	const { onAdd } = useContext(ItemContext);

	const handleClickDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleClickIncrement = () => {
		setQuantity(quantity + 1);
	};

	return (
		<>
			<Container>
				<div>
					<button onClick={handleClickDecrement}>-</button>
					<input value={quantity} />
					<button onClick={handleClickIncrement}>+</button>
					<button onClick={() => onAdd(product, quantity)}>
						Agregar al carrito
					</button>
				</div>
			</Container>
		</>
	);
}
