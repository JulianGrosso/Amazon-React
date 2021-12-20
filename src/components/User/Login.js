import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		alert(
			`THIS FORM IS ONLY FOR FRONT-END TEST\nYOUR DATA WAS NOT SAVED\n\nHi ${email}, you are successfully logged in!\nYou have entered this password: ${password}\n\n---- After this alert you will be redirected to the home page ----`
		);

		// redirect to Home page
		navigate("/");
	};

	return (
		<Container>
			<Link to="/">
				<Logo src="/img/Amazon_logo.svg" alt="Amazon" />
			</Link>
			<LoginContainer>
				<h1>Sign-In</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" onClick={signIn}>
						Sign In
					</button>
				</form>

				<p>By continuing, you agree to Conditions of Use and Privacy Notice.</p>
			</LoginContainer>
			<NewAccountWrap>
				<div>
					<h5>New to Amazon?</h5>
				</div>
				<button onClick={() => navigate("/register")}>
					Create your Amazon Account
				</button>
			</NewAccountWrap>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;

const Logo = styled.img`
	width: 100px;
	object-fit: contain;
	margin-top: 30px;
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
`;

const LoginContainer = styled.div`
	width: 350px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid lightgray;
	padding: 20px;

	h1 {
		font-weight: 500;
		margin-bottom: 20px;
		font-size: 28px;
	}

	form h5 {
		margin-bottom: 5px;
		font-size: 13px;
		font-weight: 600;
	}

	form input {
		height: 30px;
		margin-bottom: 10px;
		background-color: white;
		width: 100%;
		border: 1px solid #a6a6a6;
		border-radius: 3px;
		outline: none;
		padding-left: 8px;
	}

	p {
		margin-top: 15px;
		font-size: 12px;
	}

	form button {
		width: 100%;
		height: 30px;
		color: #111;
		text-align: center;
		vertical-align: middle;
		margin-top: 10px;
		border: 1px solid;
		border-radius: 4px;
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
	}
`;

const NewAccountWrap = styled.div`
	width: 350px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border: none;
	margin-top: 22px;
	text-align: center;

	div {
		width: 100%;
		position: relative;

		h5 {
			line-height: 1;
			font-size: 12px;
			color: #767676;
			font-weight: 400;
			z-index: 2;
			position: relative;
			display: inline-block;
			background-color: white;
			padding: 0 8px 0 7px;
		}

		::after {
			content: "";
			width: 100%;
			background-color: transparent;
			display: block;
			height: 1px;
			border-top: 1px solid #e7e7e7;
			position: absolute;
			top: 60%;
			z-index: 1;
		}
	}

	button {
		width: 100%;
		height: 30px;
		color: #111;
		text-align: center;
		vertical-align: middle;
		margin-top: 20px;
		background: #e7e9ec;
		border: 1px solid;
		border-radius: 4px;
		border-color: darkgray;
		box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
		cursor: pointer;
		transition: all 150ms ease-in-out;

		:hover {
			background: #eee;
		}
	}
`;
