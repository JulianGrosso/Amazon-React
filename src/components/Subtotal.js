import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Subtotal = () => {
	return (
		<SubtotalContainer>
			<NumberFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal (0 items): <strong>0</strong>
						</p>
						<Gift>
							<input type="checkbox" /> This order contains a gift
						</Gift>
					</>
				)}
				decimalScale={2}
				value={0}
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
	background: #f0c14b;
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	color: #111;
`;
