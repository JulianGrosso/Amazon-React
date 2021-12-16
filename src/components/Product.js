import React from "react";
import styled from "styled-components";

const Product = ({ id, title, image, price, rating }) => {
	return (
		<ProductContainer key={id}>
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
			</Info>
			<ProductImg src={image} alt="" />
			<Button>Add to Basket</Button>
		</ProductContainer>
	);
};

export default Product;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	margin: 10px;
	padding: 20px;
	width: 100%;
	max-height: 400px;
	min-width: 100px;
	background-color: #fff;
	z-index: 1;
`;

const Info = styled.div`
	height: 100px;
	margin-bottom: 15px;
`;

const Title = styled.p``;

const Price = styled.p`
	margin-top: 5px;
`;

const Rating = styled.div`
	display: flex;
`;

const ProductImg = styled.img`
	max-height: 200px;
	width: 100%;
	object-fit: contain;
	margin-bottom: 15px;
`;

const Button = styled.button`
	background: #f0c14b;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	color: #111;
	padding: 4px;
`;
