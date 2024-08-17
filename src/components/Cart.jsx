import React, { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import Checkout from './Checkout';

const initialValues = {
	phone: '',
	email: '',
	name: '',
};

export default function Cart() {
	const [buyer, setBuyer] = useState(initialValues);
	const [disabled, setDisabled] = useState(true);
	const { items, reset, removeItem } = useContext(ItemContext);
	const total = items
		.reduce((acc, act) => acc + act.price * act.quantity, 0)
		.toFixed(2);

	if (items.length === 0) return <EmptyCart />;

	return (
		<Container>
			<h1 className="text-center my-4">Total Carrito: ${total}</h1>
			<Row>
				{items.map((item) => (
					<Col md={4} key={item.id} className="mb-4">
						<Card>
							<NavLink
								to={`/item/${item.id}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<Card.Img
									variant="top"
									src={item.pictureUrl}
									alt={item.title}
									style={{ height: '200px', objectFit: 'cover' }}
								/>
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>
										Precio: ${item.price}.- <br />
										Cantidad: {item.quantity}
									</Card.Text>
								</Card.Body>
							</NavLink>
							<Button
								variant="danger"
								onClick={() => removeItem(item.id)}
								style={{ width: '100%' }}
							>
								Eliminar
							</Button>
						</Card>
					</Col>
				))}
			</Row>
			<Checkout total={total} />
		</Container>
	);
}
