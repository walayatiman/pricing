import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
	text-align: center;

	* {
		margin-bottom: 15px;
	}
`;

export const Heading = styled.h3`
	color: ${(props) => props.theme.colors.green};
	font-size: ${(props) => props.theme.fontSizes.xlarge};
	text-align: center;
	font-weight: bold;
	line-height: 1.4em;
`;

export const Subtitle = styled.p`
	max-width: 700px;
	line-height: 1.6em;
	margin: 0 auto 15px auto;
`;

export const Btn = styled.button`
	background-color: transparent;
	font-size: ${(props) => props.theme.fontSizes.small};
	text-transform: uppercase;
	padding: 10px 25px;
	border: 1px solid #d0d7dc;
	cursor: pointer;
	transition: all ease-in-out 0.25s;

	&:first-child {
		border-bottom-left-radius: 25px;
		border-top-left-radius: 25px;
		border-right: none;
	}

	&:last-child {
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
	}

	&.active {
		background-color: ${(props) => props.theme.colors.green};
		color: #fff;
	}
`;

export const Price = styled.p`
	font-size: ${(props) => props.theme.fontSizes.xlarge};
	font-weight: bold;
	transition: all ease-in-out 0.25s;

	span {
		font-size: 14px;
	}
`;

export const PricingCard = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 810px) {
		flex-wrap: wrap;
	}

	div {
		border: 1px solid ${(props) => props.theme.colors.green};
		padding: 1em 3em;
		border-radius: 15px;

		ul {
			li {
				svg {
					margin-bottom: 0;
					margin-right: 10px;
					fill: ${(props) => props.theme.colors.green};
				}
			}
		}

		a {
			margin-top: 1em;
		}
	}
`;
