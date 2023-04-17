import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';

export const Btn = styled.a`
	padding: 20px 32px;
	text-decoration: none;
	line-height: normal;
	display: inline-block;
	border: ${(props) =>
		props.color === 'green' ? 'none' : `1px solid ${props.theme.colors.dark}`};
	border-radius: 5px;
	font-weight: bold;
	font-size: 16px;
	color: ${(props) =>
		props.color === 'green' ? '#fff' : props.theme.colors.dark};
	background-color: ${(props) =>
		props.color === 'green' ? props.theme.colors.green : 'transparent'};
	transition: all ease-in-out 0.25s;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
		color: ${(props) =>
			props.color === 'green' ? '' : props.theme.colors.green};
		border: ${(props) =>
			props.color === 'green' ? '' : `1px solid ${props.theme.colors.green}`};
	}
`;

export const Button = (props) => {
	return (
		<Theme>
			<Btn color={props.color} href={props.url}>
				{props.children}
			</Btn>
		</Theme>
	);
};
