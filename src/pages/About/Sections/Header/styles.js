import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: ${(props) => props.theme.colors.green};
	position: relative;

	.custom-shape-divider-top-1673585268 {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.custom-shape-divider-top-1673585268 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 150px;

		@media (max-width:475px){
			height: 3em;
			
		}
	}

	.custom-shape-divider-top-1673585268 .shape-fill {
		fill: #fff;
	}
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	h2 {
		color: #fff;
		text-align: center;
		flex-grow: 1;
		font-size: ${(props) => props.theme.fontSizes.xlarge};
		font-weight: bold;
		line-height: normal;
	}

	* {
		margin-bottom: 15px;
	}
`;

export const Info = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-gap: 2rem;
	margin-top: 3em;

	@media (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.section {
		position: relative;

		p {
			line-height: 1.6em;
			color: #fff;
			margin-bottom: 2em;
			font-size: ${(props) => props.theme.fontSizes.small};
		}

		img {
			width: 100%;
		}

		.circular,
		.blob {
			position: absolute;
		}

		.circular {
			max-width: max(13rem, 1rem);
			bottom: 1em;
			right: 0;
			z-index: 2;
		}

		.blob {
			max-width: max(8rem, 1rem);
			bottom: 10em;
			right: 0;
			z-index: 1;
		}
	}
`;
