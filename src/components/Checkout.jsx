import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Container, Button } from 'react-bootstrap';
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
			<form>
				<div>
					<label>Nombre</label>
					<input value={buyer.name} onChange={handleChange} name="name" />
					{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

					<label>Teléfono</label>
					<input value={buyer.phone} onChange={handleChange} name="phone" />
					{errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

					<label>Email</label>
					<input value={buyer.email} onChange={handleChange} name="email" />
					{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

					<label>Repetir Email</label>
					<input
						value={buyer.emailRepeated}
						onChange={handleChange}
						name="emailRepeated"
					/>
					{errors.emailRepeated && (
						<p style={{ color: 'red' }}>{errors.emailRepeated}</p>
					)}
				</div>
			</form>
			<div className="text-center mt-4">
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
		</Container>
	);
}
