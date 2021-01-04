import React, { useContext } from "react";
import "./Sidebar.css";
import { SidebarContext } from "../Context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
	const [sidebar, setSidebar] = useContext(SidebarContext);
	console.log(sidebar);
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
