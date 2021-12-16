import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
					exact
				/>
				<Route
					path="/cart"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
					exact
				/>
			</Routes>
		</Router>
	);
}

export default App;
