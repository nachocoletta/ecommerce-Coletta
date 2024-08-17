import React, { useEffect } from 'react';
import Item from './Item';
import { NavLink } from 'react-router-dom';

export default function ItemList({ products }) {
	return (
		<div className="container">
			<div className="row">
				{products.map((product) => {
					return (
						<div
							key={product.id}
							className="col-md-4 mb-4 d-flex align-items-stretch"
						>
							<NavLink
								id={product.id}
								to={`/item/${product.id}`}
								style={{ textDecoration: 'none' }}
							>
								<Item
									id={product.id}
									title={product.title}
									description={product.description}
									stock={product.stock}
									image={product.pictureUrl}
								/>
							</NavLink>
						</div>
					);
				})}
			</div>
		</div>
	);
}
