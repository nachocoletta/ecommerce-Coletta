import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/images/cart.jpg';
import { ItemContext } from '../context/ItemsContext';

export default function CartWidget() {
	const { items } = useContext(ItemContext);
	return (
		<Link to="/cart">
			<img
				src={cart}
				alt="cart"
				style={{
					width: '40px',
					position: 'relative',
					display: 'inline-block',
					borderRadius: '40%',
				}}
			/>
			<p
				style={{
					position: 'absolute',
					top: '20px', // Adjusted top position
					right: '15px',
					color: 'white',
					fontWeight: 'bold',
					backgroundColor: 'black',
					borderRadius: '50%',
					padding: '3px 7px',
					fontSize: '15px',
					transform: 'translate(-50%, -50%)',
				}}
			>
				{items.length}
			</p>
		</Link>
	);
}
