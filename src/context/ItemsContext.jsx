import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const Provider = ({ children }) => {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		const alreadyExists = items.some((i) => i.id === item.id);

		if (alreadyExists) {
			const transform = items.map((i) => {
				if (i.id === item.id) {
					return { ...i, quantity: i.quantity + item.quantity };
				} else {
					return i;
				}
			});
			setItems(transform);
		} else {
			setItems((prev) => [...prev, item]);
		}
	};

	const removeItem = (id) => {
		const remove = items.filter((i) => i.id !== id);
		setItems(remove);
	};

	// const addItem = (item, quantity) => {
	// 	const itemFinded = items.find((i) => i.id === item.id);
	// 	// console.log('itemFinded', itemFinded);
	// 	if (!itemFinded) {
	// 		setItems((prev) => [...prev, { ...item, quantity }]);
	// 	} else {
	// 		// console.log(quantity);
	// 		if (quantity < item.stock) {
	// 			item.quantity += quantity;
	// 			let newItems;
	// 			newItems = items.map((element) => {
	// 				if (item.id === element.id) {
	// 					element = { ...element, quantity };
	// 				}
	// 			});
	// 			setItems(newItems);
	// 		}
	// 	}
	// };

	const reset = () => {
		setItems([]);
	};

	// console.log('items', items);
	return (
		<ItemContext.Provider value={{ items, addItem, reset, removeItem }}>
			{children}
		</ItemContext.Provider>
	);
};
