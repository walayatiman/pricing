import styled from 'styled-components';
import { Btn } from '../../../components/Button';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;

	h2 {
		text-align: center;
		font-weight: bold;
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		margin-bottom: 2em;
	}

	${Btn} {
		display: block;
		width: max-content;
		margin: 0 auto;
	}
`;

export const Tooltiptext = styled.div`
	cursor: pointer;
`;

export const Tooltipbox = styled.div`
	position: absolute;
	visibility: hidden;
	color: transparent;
	background-color: transparent;
	width: 250px;
	padding: 1em;
	border-radius: 4px;
	z-index: 2;
	transition: all ease-in-out 0.25s;
	transform: translate(100%, -57%);

	&:before {
		content: '';
		width: 0;
		height: 0;
		left: -9px;
		top: calc(50% - 10px);
		position: absolute;
		border: 10px solid transparent;
		transform: rotate(45deg);
		transition: all ease-in-out 0.25s;
	}

	p {
		line-height: 1.4em;
		font-size: ${(props) => props.theme.fontSizes.small};
		margin: 0;
	}
`;

export const TableContainer = styled.div`
	display: block;
	position: relative;

	& ${Tooltiptext}:hover + ${Tooltipbox} {
		visibility: visible;
		color: #fff;
		background-color: rgba(0, 0, 0, 1);
		width: 250px;
		padding: 1em;
		&:before {
			border-color: transparent transparent rgba(0, 0, 0, 1) rgba(0, 0, 0, 1);
		}
	}

	tr,
	td,
	th {
		position: relative;
		padding: 2rem;
		vertical-align: middle;

		h4 {
			font-weight: bold;
		}
	}

	tr:nth-child(2n) {
		background-color: #f5f6f7;
	}

	table {
		width: 100%;
	}

	td:first-child {
		width: 60%;
	}

	td:not(:first-child) {
		text-align: center;

		svg {
			fill: ${(props) => props.theme.colors.green};
			width: 24px;
			height: 24px;
		}
	}
`;
