import React from "react";
import "./Cards.css";

const Cards = () => {
	return (
		<div className="Cards">
			<div className="inputFields">
				<input type="text" className="Cards--input" />
				<select className="cards--sort">
					<option value="">Sort by price</option>
					<option value="">Lowest price</option>
					<option value="">highest price</option>
				</select>
			</div>
		</div>
	);
};

export default Cards;
