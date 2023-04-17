import React from 'react';
import Headerlogo from '../images/logo.png';
import styled from 'styled-components';
import FullWidthContainer from './FullWidthContainer';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About/About';
import HomePage from '../pages/Home';
import Features from '../pages/Features/Features';
import Pricing from '../pages/Pricing/Pricing';
import Links from '../components/Links';
import { scroll } from '../hooks/useScroll';

const Nav = styled.div`
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ImgNav = styled(Link)`
	width: max-content;
	display: block;
	cursor: pointer;

	img {
		max-width: 10rem;
	}
`;

const Largecontainer = styled.div`
	display: block;
	position: fixed;
	background-color: transparent;
	transition: all ease-in-out 0.25s;
	width: 100%;
	z-index: 200;

	&.scrolled {
		background-color: white;
	}

	@media (max-width: 650px) {
		background-color: #fff;
	}
`;

function Header() {
	const { scrolling } = scroll();

	return (
		<Largecontainer className={scrolling ? 'scrolled' : ''}>
			<FullWidthContainer>
				<Nav>
					<ImgNav to="/">
						<img src={Headerlogo} alt="logo" />
					</ImgNav>
					<Routes>
						<Route path="/" element={<Links />}>
							<Route index element={<HomePage />} />
							<Route path="/about" element={<About />} />
							<Route path="/features" element={<Features />} />
							<Route path="/pricing" element={<Pricing />} />
						</Route>
					</Routes>
				</Nav>
			</FullWidthContainer>
		</Largecontainer>
	);
}

export default Header;
