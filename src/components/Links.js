import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.nav`
	display: flex;
	gap: 1rem;

	@media (max-width: 600px) {
		display: none;
	}
`;
const NavLinksMobile = styled.nav`
	display: none;

	a {
		color: #fff;
		font-size: clamp(14px, 5vw, 20px);
		text-align: left;
	}

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		transition: all ease-in-out 0.25s;
		width: 100vw;
		text-align: center;
		padding: 2rem 0;
		top: 5rem;
		gap: 2rem;
		transform: translateX(100%);
		background: #169a7a;
		height: 100vh;
		padding: 2em;

		&.menu-opened {
			transform: translateX(0%);
		}
	}
`;

const NavLink = styled(Link)`
	text-decoration: none;
	font-family: 'Comfortaa';
	color: #333;
	font-size: 14px;
`;

const ToggleBtn = styled.button`
	background-color: transparent;
	border: none;

	@media (min-width: 600px) {
		display: none;
	}
	.line {
		height: 5px;
		width: 45px;
		background: green;
		margin: 7px auto;
		border-radius: 5px;
		transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	&.icon-open {
		.line {
			&:first-child {
				transform: rotate(45deg) translate(12px, 12px);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:last-child {
				transform: rotate(-45deg) translate(5px, -5px);
			}
		}
	}

	@media (max-width: 600px) {
		display: block;
	}
`;

const Links = () => {
	const navItems = [
		{ id: 1, name: 'Home', location: '/' },
		{ id: 2, name: 'About', location: '/about' },
		{ id: 3, name: 'Features', location: '/features' },
		{ id: 4, name: 'Pricing', location: '/pricing' },
		{ id: 5, name: 'Contact', location: '/contact' },
	];

	const [open, setOpen] = useState(false);
	function addClass(e) {
		setOpen(!open);
		let app = document.getElementsByClassName('App')[0];

		console.log(open, app);

		if (open === false) {
			app.classList.add('test');
		} else {
			app.classList.remove('test');
		}
	}

	return (
		<>
			<NavLinks>
				{navItems.map((navItem, i) => (
					<NavLink to={navItem.location} key={i}>
						{navItem.name}
					</NavLink>
				))}
			</NavLinks>
			<ToggleBtn onClick={addClass} className={!open ? '' : 'icon-open'}>
				<div className="menu__item--hamburger">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</ToggleBtn>
			<NavLinksMobile className={!open ? '' : 'menu-opened'}>
				{navItems.map((navItem, i) => (
					<NavLink to={navItem.location} key={i}>
						{navItem.name}
					</NavLink>
				))}
			</NavLinksMobile>
		</>
	);
};

export default Links;
