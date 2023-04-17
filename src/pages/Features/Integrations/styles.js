import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 4vmin;
	align-items: center;

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}

	* {
		margin-bottom: 15px;
	}

	span {
		text-transform: uppercase;
		margin-bottom: 1em;
		display: block;
	}

	h3 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		font-weight: bold;
		line-height: normal;
	}

	p {
		line-height: 1.6em;
	}

	img {
		width: 100%;
		max-width: 80%;
	}
`;
