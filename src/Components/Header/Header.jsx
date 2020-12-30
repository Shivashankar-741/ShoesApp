import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	const [sidebar, setSidebar] = React.useState(false);
	console.log(sidebar);

	return (
		<div className="Header">
			<h1 className="Header--tag">Steps</h1>
			<div className="Header--cart" onClick={() => setSidebar(!sidebar)}>
				<FaShoppingCart className="Header--cart__logo" />
				<span className="Header--cart--counter">0</span>
			</div>
		</div>
	);
};

export default Header;
