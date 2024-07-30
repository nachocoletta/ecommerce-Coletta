import React, { useEffect } from 'react';
import Item from './Item';
import { NavLink } from 'react-router-dom';
export default function ItemList({ products }) {
	return (
		<div>
			{products.map((product) => {
				return (
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
				);
			})}
		</div>
	);
}
