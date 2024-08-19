import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function NotFound() {
	return (
		<Container className="text-center" style={{ padding: '50px 0' }}>
			<Row>
				<Col>
					<img
						src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg"
						alt="Page not found"
						style={{ marginBottom: '30px', opacity: 0.7, width: '350px' }}
					/>
					<h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
						Página No Encontrada
					</h1>
					<p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
						Lo sentimos, la página que buscas no está disponible.
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
