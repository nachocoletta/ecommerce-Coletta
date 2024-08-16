import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const Provider = ({ children }) => {
	const [items, setItems] = useState([]);

	const onAdd = (item, quantity) => {
		const itemFinded = items.find((i) => i.id === item.id);
		console.log('itemFinded', itemFinded);
		if (!itemFinded) {
			setItems((prev) => [...prev, { ...item, quantity }]);
		} else {
			console.log(quantity);
			if (quantity < item.stock) {
				item.quantity += quantity;
				let newItems;
				newItems = items.map((element) => {
					if (item.id === element.id) {
						element = { ...element, quantity };
					}
				});
				setItems(newItems);
			}
		}
	};

	const reset = () => {
		setItems([]);
	};

	// console.log('items', items);
	return (
		<ItemContext.Provider value={{ items, onAdd, reset }}>
			{children}
		</ItemContext.Provider>
	);
};
