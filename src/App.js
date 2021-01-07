import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Cards from "./Components/Cards/Cards";
import { SidebarProvider } from "./Components/Context/SidebarContext";
import { NameProvider } from "./Components/Context/NameContext";
import { CardsProvider } from "./Components/Context/CardsContext";
import { CartProvider } from "./Components/Context/CartContext";

function App() {
	return (
		<CartProvider>
			<CardsProvider>
				<NameProvider>
					<SidebarProvider>
						<div className="App">
							<Header />
							<div className="App--in">
								<Sidebar />
								<Cards />
							</div>
						</div>
					</SidebarProvider>
				</NameProvider>
			</CardsProvider>
		</CartProvider>
	);
}

export default App;
