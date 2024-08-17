import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Container, Button, Form } from 'react-bootstrap';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const initialValues = {
	name: '',
	phone: '',
	email: '',
	emailRepeated: '',
};

export default function Checkout({ total }) {
	const [buyer, setBuyer] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const { reset, items } = useContext(ItemContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const updatedBuyer = { ...buyer, [name]: value };
		setBuyer(updatedBuyer);
		const validationErrors = validate(updatedBuyer);
		setErrors(validationErrors);
	};

	const validateEmail = (email) => {
		const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	};

	const validate = (input) => {
		let errors = {};
		if (!input.name) {
			errors.name = 'Nombre requerido';
		}

		if (!input.phone) {
			errors.phone = 'Teléfono requerido';
		}

		if (!input.email) {
			errors.email = 'Email requerido';
		}

		if (!validateEmail(input.email)) {
			errors.email = 'Email inválido';
		}

		if (!input.emailRepeated) {
			errors.emailRepeated = 'Debe repetir el email';
		}

		if (input.email !== input.emailRepeated) {
			errors.emailRepeated = 'Los emails no coinciden';
		}

		return errors;
	};

	const handleOrder = () => {
		const now = new Date();
		const order = {
			date: now.toLocaleDateString(),
			buyer: {
				name: buyer.name,
				phone: buyer.phone,
				email: buyer.email,
			},
			items,
			total,
		};

		const db = getFirestore();
		const orderCollection = collection(db, 'orders');

		addDoc(orderCollection, order).then(({ id }) => {
			if (id) {
				alert(`Su orden: ${id} ha sido generada con éxito`);
				reset();
			}
		});
	};

	const hasErrors = Object.keys(errors).length > 0;

	return (
		<Container>
			<Form className="mt-4">
				<Form.Group className="mb-3">
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						value={buyer.name}
						onChange={handleChange}
						name="name"
						isInvalid={!!errors.name}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.name}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Teléfono</Form.Label>
					<Form.Control
						type="text"
						value={buyer.phone}
						onChange={handleChange}
						name="phone"
						isInvalid={!!errors.phone}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.phone}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={buyer.email}
						onChange={handleChange}
						name="email"
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-4">
					<Form.Label>Repetir Email</Form.Label>
					<Form.Control
						type="email"
						value={buyer.emailRepeated}
						onChange={handleChange}
						name="emailRepeated"
						isInvalid={!!errors.emailRepeated}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.emailRepeated}
					</Form.Control.Feedback>
				</Form.Group>

				<div className="text-center">
					<Button
						variant="success"
						size="lg"
						className="me-2"
						disabled={hasErrors}
						onClick={handleOrder}
					>
						Finalizar compra
					</Button>
					<Button variant="outline-danger" size="lg" onClick={reset}>
						Vaciar carrito
					</Button>
				</div>
			</Form>
		</Container>
	);
}
