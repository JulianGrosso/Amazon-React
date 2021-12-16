import React from "react";
import styled from "styled-components";
import { useStateValue } from "../features/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<ProductContainer>
			<ImgWrap>
				<ProductImg src={image} alt="" />
			</ImgWrap>
			<Info>
				<Title>{title}</Title>
				<Price>
					<small>$</small>
					<strong>{price}</strong>
				</Price>
				<Rating>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</Rating>
				<Button onClick={removeFromBasket}>Remove from Basket</Button>
			</Info>
		</ProductContainer>
	);
};

export default CheckoutProduct;

const ProductContainer = styled.div`
	display: flex;
	margin-top: 40px;
	margin-bottom: 40px;
	max-width: 90%;
`;

const Info = styled.div`
	padding-left: 20px;
`;

const Title = styled.p`
	font-size: 17px;
`;

const Price = styled.p`
	margin-top: 5px;
	font-size: 17px;
`;

const Rating = styled.div`
	display: flex;
`;

const ImgWrap = styled.div`
	min-width: 300px;
	display: flex;
	justify-content: center;
`;

const ProductImg = styled.img`
	object-fit: contain;
	max-width: 250px;
	max-height: 180px;
`;

const Button = styled.button`
	background: #f0c14b;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	color: #111;
	padding: 4px;
`;
