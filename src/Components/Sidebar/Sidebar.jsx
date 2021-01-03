import React, { useContext } from "react";
import "./Sidebar.css";
import { AppContext } from "../AppContext/AppContext";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
	const [sidebar, setSidebar] = useContext(AppContext);
	console.log(sidebar);
	return (
		<div className={sidebar ? "Sidebar--active" : "Sidebar"}>
			{/* <h1 className="Sidebar--head">header</h1> */}
			<div className="sidebar--close" onClick={() => setSidebar(false)}>
				<AiOutlineClose />
			</div>
		</div>
	);
};

export default Sidebar;
