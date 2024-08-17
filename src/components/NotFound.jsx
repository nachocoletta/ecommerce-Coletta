import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function NotFound() {
	return (
		<Container className="text-center" style={{ padding: '50px 0' }}>
			<Row>
				<Col>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbiifpjqr9_wFVcfaf6oR4WJYMOLzB__zEQ&s"
						alt="Product not found"
						style={{ marginBottom: '30px', opacity: 0.7 }}
					/>
					<h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
						Producto No Encontrado
					</h1>
					<p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
						Lo sentimos, pero el producto que buscas no está disponible.
					</p>
					<Button
						as={Link}
						to="/"
						variant="primary"
						size="lg"
						style={{ marginTop: '20px' }}
					>
						Volver al Inicio
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
