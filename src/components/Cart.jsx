import React, { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Container } from 'react-bootstrap';

const initialValues = {
	phone: '',
	email: '',
	name: '',
};

export default function Cart() {
	const [buyer, setBuyer] = useState(initialValues);
	const { items, reset, removeItem } = useContext(ItemContext);
	const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

	return (
		<Container>
			<h1>Total Carrito: {total}</h1>
			{items.map((i) => {
				return (
					<div key={i.id}>
						<h1>{i.title}</h1>
						<h2>Precio: {i.price}</h2>
						<h3>Cantidad: {i.quantity}</h3>
						<img src={i.pictureUrl} height={100} />
						<h4 onClick={() => removeItem(i.id)}>❌</h4>
					</div>
				);
			})}
			{items.map((i) => {
				<div key={i.id}>{i.title}</div>;
			})}
			<button>Finalizar compra</button>
			<button onClick={reset}>Vaciar carrito</button>
		</Container>
	);
}
