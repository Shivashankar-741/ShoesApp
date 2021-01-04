import React, { useContext } from "react";
import "./Cards.css";
import { CardsContext } from "../Context/CardsContext";

const Cards = () => {
	const [cards, setCards] = useContext(CardsContext);
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
				{/* {cards.map((el, index) => (
					<h1 key={index}>{el.shoe}</h1>
				))} */}
			</div>
			<ul className="Cards--product">
				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>

				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>

				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>

				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>

				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>

				<li className="Cards--list">
					<div className="Cards--list-img">
						<img
							src="https://pngimg.com/uploads/vans/vans_PNG24.png"
							alt=""
							className="Cards--list__imgIn"
						/>
					</div>
					<div className="Cards--list__name">
						<h2 className="Cards--list__nameIn">Nike brown</h2>
					</div>
					<div className="Cards--list__size">
						<h2 className="cards--list__sizeLeft">SIZE</h2>
						<h2 className="cards--list__sizeright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--list__color">
						<h2 className="cards--list__colorLeft">SIZE</h2>
						<h2 className="cards--list__colorright">
							<span>7</span>
							<span>7</span>
							<span>7</span>
							<span>7</span>
						</h2>
					</div>
					<div className="Cards--price">
						<h2 className="cards--list__priceLeft">SIZE</h2>
						<h2 className="cards--list__priceright">
							<span>1999$</span>
						</h2>
					</div>
					<div className="btn">
						<button className="btn--in">Add to cart</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Cards;
