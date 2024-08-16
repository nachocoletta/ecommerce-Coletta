import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemsContext';

export default function Cart() {
	const { items, reset } = useContext(ItemContext);
	return (
		<div>
			{items.map((i) => (
				<div key={i.id}>{i.title}</div>
			))}
			<button>Finalizar compra</button>
			<button onClick={() => reset()}>Vaciar carrito</button>
		</div>
	);
}
