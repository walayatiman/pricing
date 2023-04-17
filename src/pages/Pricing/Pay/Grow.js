import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0 8px 20px 1px hsla(0, 0%, 60%, 0.4);
	padding: 24px 34px;
	border-radius: 10px;
	background-color: #fff;

	h4 {
		margin-bottom: 12px;
		color: #333;
		font-size: 20px;
		line-height: 28px;
		font-weight: bold;
		text-transform: capitalize;
	}

	h3 {
		font-size: 50px;
		color: ${(props) => props.theme.colors.dark};
		margin-bottom: 10px;
	}

	.contents {
		line-height: 1.3em;
		font-size: 14px;
		color: #5d656b;
	}

	strong {
		font-weight: bold;
	}

	p {
		font-size: 14px;
		line-height: normal;
		margin-bottom: 10px;
	}

	span {
		display: block;
		font-size: 12px;
		line-height: 1.3em;
		margin-top: 16px;
		color: #5d656b;
	}

	section {
		margin: 16px 0;
	}
`;

export const Grow = (props) => {
	return (
		<Box>
			<div>
				<h4>{props.title}</h4>
				<p className="contents">{props.content}</p>
			</div>
			<section>{props.children}</section>
		</Box>
	);
};
