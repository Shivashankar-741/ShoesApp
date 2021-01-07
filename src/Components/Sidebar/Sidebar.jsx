import React, { useContext } from "react";
import "./Sidebar.css";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
	const [sidebar, setSidebar] = useContext(SidebarContext);
	const [cart] = useContext(CartContext);
	console.log(sidebar);
	console.log(cart);

	return (
		<div
			className={sidebar ? "Sidebar--active" : "Sidebar"}
			onClick={() => setSidebar(false)}
		>
			<div className="sidebar--close">
				<AiOutlineClose />
			</div>
		</div>
	);
};

export default Sidebar;
