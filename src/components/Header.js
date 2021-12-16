import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../features/StateProvider";

const Header = () => {
	const [state] = useStateValue();

	return (
		<MainNav>
			<Link to="/">
				<Logo src="/img/amazon_logo_h.png" alt="Amazon" />
			</Link>
			<SearchBar>
				<input type="text" />
				<SearchIconStyled />
			</SearchBar>
			<HeaderNav>
				<HeaderOption>
					<OptionLineOne>Hello</OptionLineOne>
					<OptionLineTwo>Sign in</OptionLineTwo>
				</HeaderOption>
				<HeaderOption>
					<OptionLineOne>Returns</OptionLineOne>
					<OptionLineTwo>& Orders</OptionLineTwo>
				</HeaderOption>
				<HeaderOption>
					<OptionLineOne>Your</OptionLineOne>
					<OptionLineTwo>Prime</OptionLineTwo>
				</HeaderOption>
				<Link to="/checkout">
					<HeaderOptionBasket>
						<ShoppingBasketStyled />
						<BasketCount>{state.basket.length}</BasketCount>
					</HeaderOptionBasket>
				</Link>
			</HeaderNav>
		</MainNav>
	);
};

export default Header;

const MainNav = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #131921;
	position: sticky;
	top: 0;
	z-index: 100;
`;

const Logo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 0 20px;
	margin-top: 18px;
`;

const SearchBar = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;

	input {
		height: 38px;
		padding: 10px;
		border: none;
		width: 100%;
	}
`;

const SearchIconStyled = styled(SearchIcon)`
	padding: 5px;
	height: 38px !important;
	width: 38px !important;
	background-color: #cd9042;
`;

const HeaderNav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const HeaderOption = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
	color: white;
`;

const OptionLineOne = styled.span`
	font-size: 10px;
`;

const OptionLineTwo = styled.span`
	font-size: 13px;
	font-weight: 800;
`;

const HeaderOptionBasket = styled.div`
	display: flex;
	align-items: center;
	color: white;
	margin-left: 10px;
	margin-right: 10px;
`;

const BasketCount = styled.span`
	font-size: 13px;
	font-weight: 800;
	margin-left: 10px;
	margin-right: 10px;
`;

const ShoppingBasketStyled = styled(ShoppingBasketIcon)``;
