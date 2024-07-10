import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					{/* <img src={logo} alt="logo" style={{ width: '50px' }} /> */}
					<Navbar.Brand
						href="#home"
						style={{ fontSize: '35px', fontFamily: 'cursive' }}
					>
						Caniball
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#women">Mujer</Nav.Link>
						<Nav.Link href="#men">Hombre</Nav.Link>
						<Nav.Link href="#kids">Infantil</Nav.Link>
						<Nav.Link href="#ofers">Ofertas</Nav.Link>
						<Nav.Link href="#contact">Contacto</Nav.Link>
					</Nav>
				</Container>
				<CartWidget />
			</Navbar>
		</>
	);
}
