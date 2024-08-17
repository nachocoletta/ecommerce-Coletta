import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ItemContext } from '../context/ItemsContext';
export default function ItemCount({ product, stock, onAdd }) {
	const [quantity, setQuantity] = useState(1);
	const [disabled, setDisabled] = useState(false);
	const { items } = useContext(ItemContext);

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
		const itemFounded = items.find((it) => it.id === product.id);

		if (!itemFounded) {
			onAdd(quantity);
			setQuantity(1);
		} else {
			if (quantity <= stock - itemFounded.quantity) {
				onAdd(quantity);
				setQuantity(1);
			} else {
				alert(
					`Stock insuficiente, el maximo para agregar es de ${
						stock - itemFounded.quantity
					}`
				);
			}
		}
	};

	const handleChange = (e) => {
		if (Number(e.target.value) <= stock) {
			setDisabled(false);
			setQuantity(Number(e.target.value));
		} else {
			setDisabled(true);
		}
	};
	return (
		<Container>
			<div>
				<button onClick={handleClickDecrement}>-</button>
				<input value={quantity} onChange={handleChange} />
				<button onClick={handleClickIncrement}>+</button>
				<button onClick={handleAdd} disabled={disabled}>
					Agregar al carrito
				</button>
			</div>
		</Container>
	);
}
