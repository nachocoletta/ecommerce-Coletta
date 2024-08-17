import React from 'react';
import { Card, Image } from 'react-bootstrap';
import ItemCount from './ItemCount';
export default function ItemDetail({ id, title, description, stock, image }) {
	return (
		<Card id={id} className="col-md4 mb-4 ">
			<Card.Body>
				<p>
					<strong>Producto:</strong> {title}
				</p>
				<p>
					<strong>Descripcion:</strong> {description}
				</p>
				<p>
					<strong>Stock:</strong> {stock}
				</p>
				<Image src={image} alt={title} className="w-25 h-25 img-fluid" />
			</Card.Body>
		</Card>
	);
}
