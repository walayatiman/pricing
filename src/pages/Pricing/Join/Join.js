import React from 'react';
import { Button } from '../../../components/Button';
import { Container, Section } from './style';

export const Join = () => {
	return (
		<Section>
			<Container>
				<section>
					<h2>Join The Family</h2>
					<p>No time limit. No credit card required.</p>
				</section>
				<section>
					<Button color="green">Start for free</Button>
					<Button>View Demo</Button>
				</section>
			</Container>
		</Section>
	);
};
