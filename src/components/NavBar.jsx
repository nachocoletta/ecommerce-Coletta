import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					{/* <img src={logo} alt="logo" style={{ width: '50px' }} /> */}
					<Nav.Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
						<Navbar.Brand style={{ fontSize: '35px', fontFamily: 'cursive' }}>
							Caniball
						</Navbar.Brand>
					</Nav.Link>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to={`/category/Mujer`}>
							Mujer
						</Nav.Link>
						<Nav.Link as={NavLink} to={`/category/Hombre`}>
							Hombre
						</Nav.Link>
						<Nav.Link as={NavLink} to={`/category/Infantil`}>
							Infantil
						</Nav.Link>
						<Nav.Link as={NavLink} to={`/category/Ofertas`}>
							Ofertas
						</Nav.Link>
					</Nav>
				</Container>
				<CartWidget />
			</Navbar>
		</>
	);
}
