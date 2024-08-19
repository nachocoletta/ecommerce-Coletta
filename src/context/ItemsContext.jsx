import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const Provider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [categories, setCategories] = useState([
		'Hombre',
		'Mujer',
		'Infantil',
		'Ofertas',
	]);

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

	const reset = () => {
		setItems([]);
	};

	return (
		<ItemContext.Provider
			value={{ items, addItem, reset, removeItem, categories }}
		>
			{children}
		</ItemContext.Provider>
	);
};
