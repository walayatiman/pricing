import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
	position: relative;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
		padding-top: 3em;
		padding-bottom: 3em;
	}

	div {
		box-shadow: 0 1px 24px 0 rgba(0, 0, 0, 0.12);
		border-radius: 16px;
		padding: 5%;
		display: flex;
		align-items: center;
		gap: 1rem;

		@media only screen and (min-width: 500px) and (max-width: 810px) {
			flex-direction: column;
		}

		@media (max-width: 475px) {
			padding: 4%;
		}

		h3 {
			font-weight: bold;
			font-size: ${(props) => props.theme.fontSizes.large};
			margin-bottom: 5px;
		}

		span {
			font-size: 13px;
			color: ${(props) => props.theme.colors.green};
		}

		p {
			margin-top: 1rem;
			line-height: 1.2em;
			font-size: ${(props) => props.theme.fontSizes.small};
		}
	}

	* {
		margin-bottom: 15px;
	}
`;
