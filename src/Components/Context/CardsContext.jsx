import React, { createContext, useState } from "react";

export const CardsContext = createContext();

export const CardsProvider = (props) => {
	const [cards, setCards] = useState([
		{
			shoe: "Nike brown",
			size: [7, 8, 9, 10],
			color: ["brown, gray"],
			price: 1999,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
		{
			shoe: "Nike grey",
			size: [7, 8, 9, 10],
			color: ["blue, gray"],
			price: 999,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
		{
			shoe: "Nike green",
			size: [7, 8, 9, 10],
			color: ["green, red"],
			price: 799,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
		{
			shoe: "Nike Purple",
			size: [7, 8, 9, 10],
			color: ["purple, gray"],
			price: 699,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
		{
			shoe: "Nike green",
			size: [7, 8, 9, 10],
			color: ["brown, yellow"],
			price: 599,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
		{
			shoe: "Nike black",
			size: [7, 8, 9, 10],
			color: ["gray, black"],
			price: 399,
			shoeImg: "https://pngimg.com/uploads/vans/vans_PNG24.png",
		},
	]);

	return (
		<CardsContext.Provider value={[cards, setCards]}>
			{props.children}
		</CardsContext.Provider>
	);
};
