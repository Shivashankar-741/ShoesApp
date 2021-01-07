import React, { useContext } from "react";
import "./Header.css";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	const [sidebar, setSidebar] = useContext(SidebarContext);
	const [cart] = useContext(CartContext);
	console.log(sidebar);

	return (
		<div className="Header">
			<h1 className="Header--tag">Steps </h1>
			<div className="Header--cart" onClick={() => setSidebar(true)}>
				<FaShoppingCart className="Header--cart__logo" />
				<span className="Header--cart--counter">{cart.length}</span>
			</div>
		</div>
	);
};

export default Header;
