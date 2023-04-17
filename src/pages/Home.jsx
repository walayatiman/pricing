import React from 'react';
import { Button } from '../components/Button';
import Theme from '../components/Theme';
import meeting from '../images/meeting.jpg';
import pc from '../images/pc.jpg';
import contract from '../images/contract.png';
import redDot from '../images/dot-red.svg';
import orangeDot from '../images/dot-orange.svg';
import shape from '../images/shape.svg';
import workflow from '../images/workflow.svg';
import { resizeWidth } from '../hooks/useWidth';
import wave from '../images/wave.svg';
import {
	Container,
	InnerContainer,
	Section,
	HeadingOne,
	Paragraph,
	ButtonContainer,
	FirstImg,
	SecondImg,
	ThirdImg,
	RedDot,
	OrangeDot,
	Workflow,
	Shape,
	Divider,
} from '../styles/home/first-section';
import {
	BlurbBtn,
	BlurbContainer,
	HeadingTwo,
	SecondSection,
	SecondSectionInnerContainer,
	Subtitle,
} from '../styles/home/second-section';
import Blurbs from '../components/Blurbs';
import {
	ThirdSection,
	ThirdSectionInnerContainer,
} from '../styles/home/third-section';
import Responsive from '../components/Slider';
import { Pricing } from '../components/Pricing/Pricing';
import Form from '../components/Form/Form';
import What from '../components/What/What';

const HomePage = () => {
	const { windowSize } = resizeWidth();

	return (
		<Theme>
			<Container className="hello">
				<InnerContainer>
					<Section>
						<HeadingOne>
							If you're familiar with importing CSS into your components
						</HeadingOne>
						<Paragraph>
							This example shows how all props of the Input component are passed
							on to the DOM node that is mounted, as with React elements.
						</Paragraph>
						<ButtonContainer>
							<Button color="green" url="login">
								Start for free
							</Button>
							<Button url="sales">View Demo</Button>
						</ButtonContainer>
					</Section>
					<Section size={windowSize.innerWidth}>
						<FirstImg src={meeting} alt="meeting" />
						<SecondImg src={pc} alt="computer" />
						<ThirdImg src={contract} alt="contract" />
						<RedDot src={redDot} alt="red dot" />
						<OrangeDot src={orangeDot} alt="orange dot" />
						<Workflow src={workflow} alt="workflow" />
						<Shape src={shape} alt="shape" />
					</Section>
				</InnerContainer>
			</Container>
			<Divider>
				<img src={wave} alt="divider" />
			</Divider>
			<SecondSection>
				<SecondSectionInnerContainer>
					<HeadingTwo>Origin is the point around </HeadingTwo>
					<Subtitle>Our scheduler allows clients to book calls</Subtitle>
					<BlurbContainer>
						<Blurbs />
					</BlurbContainer>
					<BlurbBtn>
						<Button color="green" url="features">
							Explore all features
						</Button>
					</BlurbBtn>
				</SecondSectionInnerContainer>
			</SecondSection>
			<ThirdSection>
				<ThirdSectionInnerContainer>
					<div className="content-container">
						<h3>A platform built with you in mind.</h3>
						<p>
							Dubsado is a blank canvas for your business needs across countless
							industries. With a host of flexible and customizable features, the
							possibilities are endless.
						</p>
						<Button color="green" url="about">
							Find your industry
						</Button>
					</div>
					<Responsive />
				</ThirdSectionInnerContainer>
			</ThirdSection>
			<Pricing />
			<Form />
			<What />
		</Theme>
	);
};

export default HomePage;
