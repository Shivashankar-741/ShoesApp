import React, { useContext } from "react";
import "./Cards.css";
import { CardsContext } from "../Context/CardsContext";
import { CartContext } from "../Context/CartContext";

const Cards = () => {
	const [cards, setCards] = useContext(CardsContext);
	const [cart, setCart] = useContext(CartContext);
	console.log(cart);
	console.log(cards);

	const handleChange = (e) => {
		const option = e.target.value;
		if (option === "Lowest price" || option === "Sort by price") {
			const valueArray = cards.sort((a, b) => {
				return a.price - b.price;
			});
			setCards([...valueArray]);
		} else if (option === "highest price") {
			const valueArray = cards.sort((a, b) => {
				return b.price - a.price;
			});
			setCards([...valueArray]);
		}
	};

	return (
		<div className="Cards">
			<div className="inputFields">
				<input
					type="text"
					className="Cards--input"
					placeholder="Search for a shoe"
				/>
				<select className="cards--sort" onChange={handleChange}>
					<option value="Sort by price">Sort by price</option>
					<option value="Lowest price">Lowest price</option>
					<option value="highest price">highest price</option>
				</select>
			</div>
			<ul className="Cards--product">
				{cards.map((el, index) => (
					<li className="Cards--list" key={index}>
						<div className="Cards--list__img">
							<img
								src={el.shoeImg}
								alt="Shoes"
								className="Cards--list__imgIn"
							/>
						</div>
						<div className="Cards--list__name">
							<h2 className="Cards--list__nameIn">{el.shoe}</h2>
						</div>
						<div className="Cards--list__size">
							<h2 className="cards--list__sizeLeft">SIZE</h2>
							<h2 className="cards--list__sizeright">
								{el.size.map((el, index) => (
									<span key={index} className={"span--size span--size__" + el}>
										{el}
									</span>
								))}
							</h2>
						</div>
						<div className="Cards--list__color">
							<h2 className="cards--list__colorLeft">COLOR</h2>
							<h2 className="cards--list__colorright">
								{el.color.map((el, index) => (
									<span key={index} className={"span--color " + el}>
										{el}
									</span>
								))}
							</h2>
						</div>
						<div className="Cards--list__price">
							<h2 className="cards--list__priceLeft">PRICE</h2>
							<h2 className="cards--list__priceright">
								<span>{el.price}$</span>
							</h2>
						</div>
						<div className="btn">
							<button
								className="btn--in"
								onClick={() =>
									setCart(
										cart.concat([
											{
												shoeImg: el.shoeImg,
												shoe: el.shoe,
												size: el.size,
												color: el.color,
												price: el.price,
											},
										])
									)
								}
							>
								Add to cart
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cards;
