import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

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
					path="/login"
					element={
						<>
							<Login />
						</>
					}
					exact
				/>
				<Route
					path="/register"
					element={
						<>
							<Register />
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
