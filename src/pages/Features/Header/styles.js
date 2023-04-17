import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: #f0fcf9;
	position: relative;
	padding-top: 7em;

	img {
		transform: rotate(180deg);
	}
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;

	* {
		margin-bottom: 15px;
	}

	h1 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		text-align: center;
		font-weight: bold;
		color: ${(props) => props.theme.colors.green};
		line-height: 1.4em;
	}

	p {
		max-width: 25em;
		text-align: center;
		line-height: 1.6em;
		margin: 0 auto;
		font-size: ${(props) => props.theme.fontSizes.medium};
		color: ${(props) => props.theme.colors.grey};
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	margin-top: 2em;
	a {
		font-size: ${(props) => props.theme.fontSizes.small};
	}
`;
