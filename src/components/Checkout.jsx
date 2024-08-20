import React, { useState, useContext, useEffect } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Container, Button } from 'react-bootstrap';
import {
	getFirestore,
	addDoc,
	collection,
	writeBatch,
	getDoc,
	doc,
} from 'firebase/firestore';

const initialValues = {
	name: '',
	phone: '',
	email: '',
	emailRepeated: '',
};

export default function Checkout({ total }) {
	const [buyer, setBuyer] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const { reset, items } = useContext(ItemContext);

	useEffect(() => {
		const validationErrors = validate(buyer);
		setErrors(validationErrors);
		setIsButtonDisabled(Object.keys(validationErrors).length > 0);
	}, [buyer]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const updatedBuyer = { ...buyer, [name]: value };
		setBuyer(updatedBuyer);
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

	const handleOrder = async () => {
		const db = getFirestore();
		const batch = writeBatch(db);

		const orderCollection = collection(db, 'orders');

		const outOfStock = [];

		for (const item of items) {
			const productRef = doc(db, 'products', item.id);
			const productSnapshot = await getDoc(productRef);

			if (productSnapshot.exists()) {
				const productData = productSnapshot.data();
				if (productData.stock >= item.quantity) {
					batch.update(productRef, {
						stock: productData.stock - item.quantity,
					});
				} else {
					outOfStock.push(item);
				}
			}
		}

		if (outOfStock.length === 0) {
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

			try {
				await batch.commit();

				const docRef = await addDoc(orderCollection, order);
				alert(`Su orden: ${docRef.id} ha sido generada con éxito`);
				reset();
			} catch (error) {
				console.error('Error al procesar la compra:', error);
				alert(
					'Hubo un error al procesar su compra. Por favor, intente de nuevo.'
				);
			}
		} else {
			const outOfStockNames = outOfStock.map((item) => item.title).join(', ');
			alert(
				`Los siguientes productos no tienen suficiente stock: ${outOfStockNames}`
			);
		}
	};

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
						placeholder="Juan Perez"
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
						placeholder="+54 9 11 3131 2222"
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
						placeholder="ejemplo@mail.com"
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
						placeholder="ejemplo@mail.com"
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
						disabled={isButtonDisabled}
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
