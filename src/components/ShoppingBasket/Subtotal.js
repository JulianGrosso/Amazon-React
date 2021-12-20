import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { getBasketTotal } from "../../context/reducers";
import { useStateValue } from "../../context/StateProvider";

const Subtotal = () => {
	const [state] = useStateValue();

	return (
		<SubtotalContainer>
			<NumberFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({state.basket.length} items): <strong>{value}</strong>
						</p>
						<Gift>
							<input type="checkbox" /> This order contains a gift
						</Gift>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(state.basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<Button>Proceed to Checkout</Button>
		</SubtotalContainer>
	);
};

export default Subtotal;

const SubtotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 300px;
	height: 140px;
	padding: 20px;
	background-color: #f3f3f3;
	border: 1px solid #dddddd;
	border-radius: 3px;
`;

const Gift = styled.small`
	display: flex;
	align-items: center;

	input {
		margin-right: 5px;
	}
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
