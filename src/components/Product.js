import React from "react";
import styled from "styled-components";
import { useStateValue } from "../context/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<ProductContainer id={id}>
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
			</Info>
			<ProductImg src={image} alt="" />
			<Button onClick={addToBasket}>Add to Basket</Button>
		</ProductContainer>
	);
};

export default Product;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
	padding: 20px;
	width: 100%;
	min-width: 100px;
	background-color: #fff;
	z-index: 1;
`;

const Info = styled.div`
	margin-bottom: 15px;
`;

const Title = styled.p``;

const Price = styled.p`
	margin-top: 5px;
`;

const Rating = styled.div`
	margin-top: 5px;
	display: flex;
`;

const ProductImg = styled.img`
	max-height: 200px;
	width: 100%;
	object-fit: contain;
	// margin-bottom: 15px;
`;

const Button = styled.button`
	color: #111;
	text-align: center;
	vertical-align: middle;
	margin-top: 10px;
	padding: 6px 14px;
	border: 1px solid;
	border-radius: 4px;
	border-color: #fcd200;
	background: #ffd814;
	box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
	cursor: pointer;
`;
