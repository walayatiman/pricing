import React from 'react';
import { CardTitle, HeaderBg, SingleCard } from './styles';

export const Card = (props) => {
	return (
		<SingleCard>
			<HeaderBg src={props.img} alt="top bg" />
			<CardTitle>{props.title}</CardTitle>
			<>{props.children}</>
		</SingleCard>
	);
};
