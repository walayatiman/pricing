import styled from 'styled-components';

export const SecondSection = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
`;

export const SecondSectionInnerContainer = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
`;

export const HeadingTwo = styled.h2`
	font-size: clamp(20px, 5vw, 36px);
	color: ${(props) => props.theme.colors.green};
	font-weight: 600;
	line-height: normal;
	margin-bottom: 10px;
	text-align: center;
`;

export const Subtitle = styled.p`
	color: ${(props) => props.theme.colors.dark};
	font-size: ${(props) => props.theme.fontSizes.small};
	text-align: center;
`;

export const BlurbContainer = styled.div`
	display: grid;
	width: 100%;
	grid-column-gap: 80px;
	grid-row-gap: 80px;
	grid-template-columns: 1fr 1fr 1fr;
	margin-top: 5%;

	@media (max-width: 980px) {
		grid-column-gap: 70px;
		grid-row-gap: 70px;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 500px) {
		grid-row-gap: 40px;
		grid-template-columns: 1fr;
	}
`;

export const BlurbBtn = styled.div`
	text-align: center;
	margin-top: 5%;
`;
