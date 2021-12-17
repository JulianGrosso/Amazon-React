import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<>
			<NavFooterColumns>
				<RowWrapper>
					<LinksColumn>
						<h2>Get to Know Us</h2>
						<p>Careers</p>
						<p>Blog</p>
						<p>About Amazon</p>
						<p>Investor Relations</p>
						<p>Amazon Devices</p>
					</LinksColumn>
					<LinksColumn>
						<h2>Make Money with Us</h2>
						<p>Sell products on Amazon</p>
						<p>Sell on Amazon Business</p>
						<p>Sell apps on Amazon</p>
						<p>Become an Affiliate</p>
						<p>Advertise Your Products</p>
						<p>Self-Publish with Us</p>
						<p>Host an Amazon Hub</p>
						<p>See More Make Money with Us</p>
					</LinksColumn>
					<LinksColumn>
						<h2>Amazon Payment Products</h2>
						<p>Amazon Business Card</p>
						<p>Shop with Points</p>
						<p>Reload Your Balance</p>
						<p>Amazon Currency Converter</p>
					</LinksColumn>
					<LinksColumn>
						<h2>Let Us Help You</h2>
						<p>Your Account</p>
						<p>Your Orders</p>
						<p>Shipping Rates & Policies</p>
						<p>Returns & Replacements</p>
						<p>Manage Your Content and Devices</p>
						<p>Amazon Assistant</p>
						<p>Help</p>
					</LinksColumn>
				</RowWrapper>
			</NavFooterColumns>
			<NavFooterLine>
				<Logo src="/img/amazon_logo_h.png" alt="Amazon" />
			</NavFooterLine>
			<NavFooterEnd>
				<p>
					Conditions of Use | Privacy Notice | Interest-Based Ads | © 2021,
					Amazon React Clone
				</p>
			</NavFooterEnd>
		</>
	);
};

export default Footer;

const NavFooterColumns = styled.div`
	background-color: #232f3e;
	width: 100%;
	max-width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: center;

	padding: 40px 0px;
`;

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const LinksColumn = styled.div`
	padding: 0px 10px;
	width: 230px;

	margin: 0px 20px;

	h2 {
		color: #fff;
		font-size: 16px;

		margin: 6px 0px 14px;
	}

	p {
		color: #ddd;
		font-size: 14px;
		margin-bottom: 10px;
	}
`;

const NavFooterLine = styled.div`
	background-color: #232f3e;
	min-width: 1000px;
	height: 90px;
	border-top: 1px solid #3a4553;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.img`
	width: 90px;
	height: auto;
	padding-top: 10px;
`;

const NavFooterEnd = styled.div`
	background-color: #131a22;
	min-width: 1000px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		color: #fff;
		font-size: 12px;
	}
`;
