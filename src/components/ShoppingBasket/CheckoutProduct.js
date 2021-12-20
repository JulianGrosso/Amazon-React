import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [state, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<ProductContainer id={id}>
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
							<p key={i}>⭐</p>
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
	margin-bottom: 4px;
`;

const Price = styled.p`
	font-size: 20px;
	margin-bottom: 4px;
`;

const Rating = styled.div`
	display: flex;
	margin-bottom: 10px;
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
	color: #111;
	text-align: center;
	vertical-align: middle;
	margin-top: 10px;
	padding: 6px 14px;
	border: 1px solid;
	border-radius: 8px;
	border-color: #fcd200;
	background: #ffd814;
	box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
	cursor: pointer;
	transition: all 200ms ease-in-out;

	:hover {
		background: #f7ca00;
		border-color: #f2c200;
		box-shadow: 0 4px 8px 0 rgb(213 217 217 / 80%);
	}
`;
