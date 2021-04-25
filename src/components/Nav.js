import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fadeIn } from '../animations';
//Redux and Routes
import { fetchSearched } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState('');
	const inputHandler = e => {
		setTextInput(e.target.value);
	};
	const submitSearch = e => {
		e.preventDefault();
		dispatch(fetchSearched(textInput));
	};
	const clearSearched = () => {
		dispatch({ type: 'CLEAR_SEARCHED' });
	};
	return (
		<StyledNav variants={fadeIn} initial='hidden' animate='show'>
			<Logo onClick={clearSearched}>
				<img src={logo} alt='logo' />
				<h1>Ignite</h1>
			</Logo>
			<form className='search'>
				<input value={textInput} onChange={inputHandler} type='text' />
				<button onClick={submitSearch} type='submit'>
					Search
				</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: 0;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
	@media screen and (max-width: 665px) {
		padding: 1.5rem 2.5rem;
		input {
			width: 100%;
		}
		button {
			width: 100%;
			margin-top: 1rem;
		}
	}
	@media screen and (max-width: 425px) {
		padding: 1rem;
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		width: 2rem;
		height: 2rem;
	}
`;

export default Nav;
