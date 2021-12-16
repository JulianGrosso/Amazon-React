import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import {
	product01,
	product02,
	product03,
	product04,
	product05,
	product06,
} from "../assets/ProductsData";

const Home = () => {
	return (
		<>
			<HomeContainer>
				<Hero>
					<HeroImg
						src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
						alt=""
					/>
				</Hero>
				<HomeRow>
					<Product {...product01} />
					<Product {...product02} />
				</HomeRow>
				<HomeRow>
					<Product {...product03} />
					<Product {...product04} />
					<Product {...product05} />
				</HomeRow>
				<HomeRow>
					<Product {...product06} />
				</HomeRow>
			</HomeContainer>
		</>
	);
};

export default Home;

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 25px;
	max-width: 1500px;
`;

const Hero = styled.div`
	margin-bottom: -150px;
`;

const HeroImg = styled.img`
	width: 100%;
	z-index: -1;
	margin-bottom: -150px;
	mask-image: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 1) 45%,
		rgba(0, 0, 0, 0)
	);
`;

const HomeRow = styled.div`
	display: flex;
	z-index: 1;
	margin-left: 5px;
	margin-right: 5px;
`;
