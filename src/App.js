import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Cards from "./Components/Cards/Cards";
import { AppProvider } from "./Components/AppContext/AppContext";

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Header />
				<div className="App--in">
					<Sidebar />
					<Cards />
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
