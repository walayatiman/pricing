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
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(3, minmax(0, 1fr));

	h3 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		font-weight: bold;
		color: ${(props) => props.theme.colors.green};
	}

	span {
		display: block;
		margin-bottom: 10px;
		font-size: 13px;
	}

	> section {
		align-self: center;
	}

	@media (max-width: 630px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
		padding: 5em 2em;
	}
`;
