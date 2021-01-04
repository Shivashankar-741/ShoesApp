import React, { useContext } from "react";
import "./Header.css";
import { SidebarContext } from "../Context/SidebarContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	const [sidebar, setSidebar] = useContext(SidebarContext);
	console.log(sidebar);

	return (
		<div className="Header">
			<h1 className="Header--tag">Steps </h1>
			<div className="Header--cart">
				<FaShoppingCart
					className="Header--cart__logo"
					onClick={() => setSidebar(true)}
				/>
				<span className="Header--cart--counter">0</span>
			</div>
		</div>
	);
};

export default Header;
