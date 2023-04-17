import React from 'react';
import { Button } from '../../../components/Button';
import { ButtonContainer, Container, Section } from './styles';
import wave from '../../../images/wave.svg';

export const Header = () => {
	return (
		<Section>
			<Container>
				<h1>Chuck Norris does not sleep. He waits.</h1>
				<p>
					Chuck Norris is the only man to ever defeat a brick wall in a game of
					tennis
				</p>
				<ButtonContainer>
					<Button color="green">Start for free</Button>
					<Button>Book a demo</Button>
				</ButtonContainer>
			</Container>
			<img src={wave} className="divider" alt="divider" />
		</Section>
	);
};
