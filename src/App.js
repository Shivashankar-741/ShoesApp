import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Cards from "./Components/Cards/Cards";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="App--in">
				<Sidebar />
				<Cards />
			</div>
		</div>
	);
}

export default App;
