import styled from 'styled-components';

export const ThirdSection = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
	position: relative;
	overflow: hidden;
`;

export const ThirdSectionInnerContainer = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
	text-align: center;

	@media (max-width: 1230px) {
		.slider-container {
			width: 50%;
		}
	}

	@media (max-width: 500px) {
		.slider-container {
			width: 100%;
			position: relative;
		}
	}
	& .content-container {
		width: 40%;
		background-color: #fff;
		z-index: 2;
		position: relative;
		padding: 5% 10% 10% 0;

		@media (max-width: 500px) {
			width: 100%;
			.content-container {
				width: 100%;
			}
		}

		h3 {
			font-size: clamp(20px, 5vw, 36px);
			line-height: normal;
			font-weight: bold;
		}

		p {
			line-height: 1.4em;
		}

		* {
			margin-bottom: 15px;
		}
	}
`;
