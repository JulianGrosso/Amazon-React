import React from "react";
import styled from "styled-components";
import CheckoutProduct from "../components/ShoppingBasket/CheckoutProduct";
import Subtotal from "../components/ShoppingBasket/Subtotal";
import { useStateValue } from "../context/StateProvider";

const Checkout = () => {
	const [state] = useStateValue();

	return (
		<CheckoutContainer>
			<LeftColumn>
				<ImgAd
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<Title>Your Shopping Basket</Title>

				{state.basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
						key={Math.random()}
					/>
				))}
			</LeftColumn>
			<RigthColumn>
				<Subtotal />
			</RigthColumn>
		</CheckoutContainer>
	);
};

export default Checkout;

const CheckoutContainer = styled.div`
	display: flex;
	padding: 20px;
	background-color: #fff;
	height: max-content;
	min-height: 400px;
	padding-bottom: 40px;
	margin-top: 100px;
`;

const LeftColumn = styled.div``;

const ImgAd = styled.img`
	width: 100%;
	margin-bottom: 10px;
`;

const Title = styled.h2`
	margin-right: 10px;
	padding: 10px;
	border-bottom: 2px solid lightgray;
`;

const RigthColumn = styled.div``;
