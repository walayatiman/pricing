import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
	margin-top: 3%;
	margin-bottom: 3%;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 900px;
	padding: 5%;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	background-color: #f0fcf9;
	border: 1px solid #cbf6ea;
	border-radius: 20px;

	h2 {
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		font-weight: bold;
		color: ${(props) => props.theme.colors.green};
		margin-bottom: 0.5em;
	}

	section:nth-child(2) {
		display: flex;
		gap: 2rem;
	}

	a {
		height: max-content;
	}

	@media (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
		width: 80%;
		text-align: center;

		section {
			justify-content: center;
		}
	}

	@media (max-width: 425px) {
		section:nth-child(2) {
			flex-direction: column;
			gap: 10px;

			a {
				font-size: 12px;
			}
		}
	}
`;
