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
		<div className={sidebar ? "Sidebar--active" : "Sidebar"}>
			<div className="sidebar--close" onClick={() => setSidebar(false)}>
				<AiOutlineClose />
			</div>

			<ul className="sidebar--cart">
				{cart.map((el, index) => (
					<li className="sidebar--cart__list" key={index}>
						<div className="sidebar--cart__img">
							<img src={el.shoeImg} alt="" className="sidebar--cart__imgIn" />
						</div>
						<div className="sidebar--cart__name">
							<h2 className="sidebar--cart__nameIn">{el.shoe}</h2>
						</div>
						<div className="sidebar--cart__size">
							<h2 className="sidebar--cart__sizeLeft">SIZE</h2>
							<h2 className="sidebar--cart__sizeright">
								{el.size.map((el, index) => (
									<span key={index} className={"span--size span--size__" + el}>
										{el}
									</span>
								))}
							</h2>
						</div>
						<div className="sidebar--cart__color">
							<h2 className="sidebar--cart__colorLeft">COLOR</h2>
							<h2 className="sidebar--cart__colorright">
								{el.color.map((el, index) => (
									<span key={index} className={"span--color " + el}>
										{el}
									</span>
								))}
							</h2>
						</div>
						<div className="sidebar--cart__price">
							<h2 className="sidebar--cart__priceLeft">PRICE</h2>
							<h2 className="sidebar--cart__priceright">
								<span>{el.price}$</span>
							</h2>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
