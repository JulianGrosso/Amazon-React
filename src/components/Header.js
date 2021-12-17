import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
	const [state] = useStateValue();

	return (
		<NavbarFull>
			<MainNav>
				<Link to="/">
					<Logo src="/img/amazon_logo_h.png" alt="Amazon" />
				</Link>
				<HeaderOption>
					<OptionLineOneDeliver>Deliver to</OptionLineOneDeliver>
					<OptionLineTwo>
						<FmdGoodOutlinedIconStyled fontSize="small" />
						Argentina
					</OptionLineTwo>
				</HeaderOption>
				<SearchBar>
					<input type="text" />
					<SearchIconStyled />
				</SearchBar>
				<LanguageIco src="/img/eng_ico.png" alt="Eng" />
				<HeaderNav>
					<HeaderOption>
						<OptionLineOne>Hello, Sign in</OptionLineOne>
						<OptionLineTwo>Account & List</OptionLineTwo>
					</HeaderOption>
					<HeaderOption>
						<OptionLineOne>Returns</OptionLineOne>
						<OptionLineTwo>& Orders</OptionLineTwo>
					</HeaderOption>
					<Link to="/checkout">
						<HeaderOptionBasket>
							<ShoppingBasketStyled />
							<BasketCount>{state.basket.length}</BasketCount>
						</HeaderOptionBasket>
					</Link>
				</HeaderNav>
			</MainNav>
			<SecundayNav>
				<WrapSecNav>
					<MenuIconStyled />
					<p>All</p>
					<p>Today's Deals</p>
					<p>Customer Service</p>
					<p>Registry</p>
					<p>Gift Cards</p>
					<p>Sell</p>
				</WrapSecNav>
				<WrapSecNav>
					<p>Epic Daily Deals</p>
				</WrapSecNav>
			</SecundayNav>
		</NavbarFull>
	);
};

export default Header;

const NavbarFull = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 100%;
	max-width: 100vw;
	top: 0;
	z-index: 100;
`;

const MainNav = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #131921;
`;

const Logo = styled.img`
	width: 98px;
	object-fit: contain;
	margin-left: 18px;
	margin-right: 26px;
	margin-top: 16px;
`;

const SearchBar = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;
	margin-left: 14px;
	margin-right: 10px;

	input {
		height: 40px;
		padding: 10px;
		border: none;
		width: 100%;
		border-radius: 4px 0px 0px 4px;
	}
`;

const SearchIconStyled = styled(SearchIcon)`
	padding: 5px;
	height: 40px !important;
	width: 45px !important;
	background-color: #febd69;
	border-radius: 0px 4px 4px 0px;
`;

const LanguageIco = styled.img`
	width: 24px;
	object-fit: contain;
	margin-left: 22px;
	margin-right: 22px;
	margin-top: 12px;
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
	cursor: pointer;
`;

const OptionLineOne = styled.span`
	font-size: 12px;
	margin-bottom: -2px;
`;

const OptionLineOneDeliver = styled.span`
	font-size: 12px;
	margin-bottom: -2px;
	color: #ccc;
`;

const OptionLineTwo = styled.span`
	font-size: 14px;
	font-weight: 700;
`;

const HeaderOptionBasket = styled.div`
	display: flex;
	align-items: center;
	color: white;
	padding-top: 5px;
	margin-left: 20px;
	margin-right: 20px;
`;

const BasketCount = styled.span`
	font-size: 18px;
	font-weight: 700;
	margin-left: 10px;
	margin-right: 10px;
`;

const ShoppingBasketStyled = styled(ShoppingBasketIcon)``;

const FmdGoodOutlinedIconStyled = styled(FmdGoodOutlinedIcon)`
	position: absolute;
	margin-left: -21px;
	margin-top: -3px;
`;

const SecundayNav = styled.div`
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #232f3e;
`;

const WrapSecNav = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	margin-top: -4px;

	p {
		margin-right: 18px;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
	}
`;

const MenuIconStyled = styled(MenuIcon)`
	margin-left: 16px;
	cursor: pointer;
`;
