import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
	background-color: #f5f6f7;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;

	* {
		margin-bottom: 15px;
	}

	h2 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		text-align: center;
		font-weight: bold;
		color: ${(props) => props.theme.colors.green};
		margin-bottom: 2em;
		line-height: 1.3em;
	}
`;

export const Waved = styled.img`
	margin-bottom: -10px;
`;

export const FeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5em;

	@media (max-width: 980px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 3em;
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 3em;
	}
`;

export const Feature = styled.div`
	span {
		text-transform: uppercase;
		margin-bottom: 10px;
		display: block;
		font-size: 13px;
	}

	h3 {
		font-weight: bold;
		font-size: ${(props) => props.theme.fontSizes.medium};
		line-height: 1.3em;
	}

	p {
		line-height: normal;
		font-size: ${(props) => props.theme.fontSizes.small};
		line-height: 1.4em;
	}
`;
