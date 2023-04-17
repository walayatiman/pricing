import React from 'react';
import bottom from './images/bottomwave.svg';
import top from './images/topwave.svg';
import styled from 'styled-components';

const DividerContainer = styled.div`
	position: relative;
	display: block;
	margin-bottom: -4px;
	overflow: hidden;

	img {
		position: relative;
		width: 100%;

		&:first-child {
			position: absolute;
			top: 7%;
		}
	}
`;

export const Divider = () => {
	return (
		<DividerContainer>
			<img src={bottom} alt="divider" />
			<img src={top} alt="divider" />
		</DividerContainer>
	);
};
