import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const handler = () => {
	console.log("cllicked");
};

const Header = () => {
	return (
		<div className="Header">
			<h1 className="Header--tag">Steps</h1>
			<div className="Header--cart" onClick={handler}>
				<FaShoppingCart className="Header--cart__logo" />
				<span className="Header--cart--counter">0</span>
			</div>
		</div>
	);
};

export default Header;
