import React from "react";
import styled from "styled-components";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../features/StateProvider";

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
