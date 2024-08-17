import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
export default function EmptyCart() {
	return (
		<Container className="text-center" style={{ padding: '50px 0' }}>
			<Row className="justify-content-center">
				<Col md={6}>
					<img
						src="https://media.istockphoto.com/id/510010569/es/vector/cesta-de-compras.jpg?s=612x612&w=0&k=20&c=W1q_RDEVy8LQb8WZBLYuqmJ8Qa72iesKRiDLoW0pruM="
						alt="Empty Cart"
						style={{ marginBottom: '30px', opacity: 0.7, height: '200px' }}
					/>
					<h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
						Tu carrito está vacío
					</h2>
					<p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
						Parece que no has agregado ningún producto a tu carrito.
					</p>
					<Button
						as={Link}
						to="/"
						variant="primary"
						size="lg"
						style={{ marginTop: '20px' }}
					>
						Explorar Productos
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
