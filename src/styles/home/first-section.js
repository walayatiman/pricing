import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding-top: 80px;
	background-color: #f0fcf9;
`;

export const InnerContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 190px 2% 15px;
	gap: 2rem;
	min-height: 500px;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const HeadingOne = styled.h1`
	font-size: clamp(25px, 5vw, 44px);
	color: ${(props) => props.theme.colors.green};
	font-weight: 600;
	line-height: normal;
	margin-bottom: 1.8rem;
`;

export const Paragraph = styled.p`
	line-height: clamp(1.4rem, 4vw, 32px);
	margin-bottom: 1.8rem;
	font-size: ${(props) => props.theme.fontSizes.medium};
	color: ${(props) => props.theme.colors.dark};
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 2rem;

	@media (max-width: 700px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const FirstImg = styled.img`
	width: 200px;
	height: 315px;
	object-fit: cover;
	border-radius: 15px;
	position: relative;
	display: block;
	margin-top: 50px;
	z-index: 1;
`;
export const SecondImg = styled.img`
	width: 230px;
	height: 350px;
	object-fit: cover;
	border-radius: 15px;
	position: absolute;
	right: 0;
	top: 150px;
	z-index: 2;
`;
export const ThirdImg = styled.img`
	width: 298px;
	height: 350px;
	object-fit: contain;
	border-radius: 15px;
	position: absolute;
	right: 25%;
	top: -100px;
	z-index: 3;
`;

export const RedDot = styled.img`
	width: 64px;
	object-fit: contain;
	z-index: 4;
	position: absolute;
	left: 5em;
	top: 0;
`;

export const OrangeDot = styled.img`
	width: 64px;
	object-fit: contain;
	z-index: 5;
	position: absolute;
	right: 12em;
	bottom: 2em;
`;

export const Shape = styled.img`
	width: 40px;
	object-fit: contain;
	z-index: 6;
	position: absolute;
	right: 10em;
	top: 0;
`;

export const Workflow = styled.img`
	width: 300px;
	object-fit: contain;
	z-index: 7;
	position: absolute;
	bottom: 8em;
	left: 5em;
`;
export const Section = styled.section`
	width: 50%;
	position: relative;

	@media (max-width: 767px) {
		width: 100%;

		&:last-child {
			margin-top: 5em;
			height: 500px;
		}
	}

	${Workflow},${ThirdImg} ,${Shape}, ${OrangeDot}, ${RedDot}, ${SecondImg}, ${FirstImg} {
		@media (max-width: 1280px) {
			scale: ${(props) => parseFloat(props.size) * 0.0008};
			transform-origin: center;
		}

		@media (max-width: 767px) {
			scale: ${(props) => parseFloat(props.size) * 0.002};
			transform-origin: center;
		}
	}
`;

export const Divider = styled.div`
	width: 100%;
`;
