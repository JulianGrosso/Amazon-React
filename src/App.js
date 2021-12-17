import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Footer from "./components/Footer";

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
							<Footer />
						</>
					}
					exact
				/>
				<Route
					path="/checkout"
					element={
						<>
							<Header />
							<Checkout />
							<Footer />
						</>
					}
					exact
				/>
			</Routes>
		</Router>
	);
}

export default App;
