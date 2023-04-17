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

export const Heading = styled.h2`
	font-size: ${(props) => props.theme.fontSizes.xlarge};
	font-weight: bold;
	margin-bottom: 2em;
`;

export const CardContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-column-gap: 44px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

export const SingleCard = styled.div`
	position: relative;
	box-shadow: 0 8px 20px 1px rgba(84, 93, 99, 0.1);
	border-radius: 10px;
`;

export const HeaderBg = styled.img`
	z-index: 1;
	width: 100%;
`;

export const CardTitle = styled.h3`
	z-index: 3;
	position: absolute;
	top: 1em;
	left: 1em;
	color: #fff;
	font-weight: bold;
	font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Social = styled.div`
	padding: 1em 2em;
	display: flex;
	div {
		padding: 0em 2em;
	}

	p {
		line-height: 1.3em;
		text-align: left;
		font-weight: 600;
		font-size: ${(props) => props.theme.fontSizes.small};
	}

	a {
		display: flex;
		gap: 10px;
		width: 100%;
		justify-content: start;
		text-decoration: none;
		color: #44429e;
		font-weight: bold;
		margin-top: 1em;

		svg {
			margin: 0;
			transition: all ease-in-out 0.25s;
		}
		&:hover svg {
			transform: translateX(5px);
		}
	}
`;

export const Posts = styled.div`
	padding: 0 !important;

	a {
		color: #d90866;
	}
`;
export const Post = styled.div`
	text-align: left;
	padding: 0 !important;
	margin-bottom: 2em;

	* {
		margin-bottom: 10px;
	}

	h2 {
		font-weight: bold;
		line-height: 1.3em;
	}

	p {
		font-weight: 300;
		font-size: 13px;
		color: ${(props) => props.theme.colors.grey};
	}

	h3 {
		font-size: 13px;
		text-transform: uppercase;
		color: ${(props) => props.theme.colors.grey};
	}

	a {
		color: ${(props) => props.theme.colors.green};
	}
`;

export const Join = styled.div`
	text-align: left;

	* {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		font-weight: bold;
		line-height: 1em;
	}

	p {
		font-size: ${(props) => props.theme.fontSizes.medium};
		color: ${(props) => props.theme.colors.grey};
	}
`;
