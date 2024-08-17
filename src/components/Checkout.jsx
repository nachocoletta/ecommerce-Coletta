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
		<Container className="my-4">
			<form>
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input
						type="text"
						className={`form-control ${errors.name ? 'is-invalid' : ''}`}
						value={buyer.name}
						onChange={handleChange}
						name="name"
					/>
					{errors.name && <div className="invalid-feedback">{errors.name}</div>}
				</div>

				<div className="mb-3">
					<label className="form-label">Teléfono</label>
					<input
						type="text"
						className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
						value={buyer.phone}
						onChange={handleChange}
						name="phone"
					/>
					{errors.phone && (
						<div className="invalid-feedback">{errors.phone}</div>
					)}
				</div>

				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="email"
						className={`form-control ${errors.email ? 'is-invalid' : ''}`}
						value={buyer.email}
						onChange={handleChange}
						name="email"
					/>
					{errors.email && (
						<div className="invalid-feedback">{errors.email}</div>
					)}
				</div>

				<div className="mb-4">
					<label className="form-label">Repetir Email</label>
					<input
						type="email"
						className={`form-control ${
							errors.emailRepeated ? 'is-invalid' : ''
						}`}
						value={buyer.emailRepeated}
						onChange={handleChange}
						name="emailRepeated"
					/>
					{errors.emailRepeated && (
						<div className="invalid-feedback">{errors.emailRepeated}</div>
					)}
				</div>

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
			</form>
		</Container>
	);
}
