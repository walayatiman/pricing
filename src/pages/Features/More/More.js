import React from 'react';
import { Container, Feature, FeatureContainer, Section, Waved } from './styles';
import Wave from './images/wavetop.svg';

export const More = () => {
	return (
		<>
			<Waved src={Wave} alt="wave" className="wave" />
			<Section>
				<Container>
					<h2>Chuck Norris counted to infinity - twice</h2>
					<FeatureContainer>
						<Feature>
							<span>workflows</span>
							<h3>Chuck Norris stuffed evil back into Pandora's Box</h3>
							<p>
								When Chuck Norris sends in his taxes, he sends blank forms and
								includes only a picture of himself
							</p>
						</Feature>
						<Feature>
							<span>workflows</span>
							<h3>Chuck Norris stuffed evil back into Pandora's Box</h3>
							<p>
								When Chuck Norris sends in his taxes, he sends blank forms and
								includes only a picture of himself
							</p>
						</Feature>
						<Feature>
							<span>workflows</span>
							<h3>Chuck Norris stuffed evil back into Pandora's Box</h3>
							<p>
								When Chuck Norris sends in his taxes, he sends blank forms and
								includes only a picture of himself
							</p>
						</Feature>
						<Feature>
							<span>workflows</span>
							<h3>Chuck Norris stuffed evil back into Pandora's Box</h3>
							<p>
								When Chuck Norris sends in his taxes, he sends blank forms and
								includes only a picture of himself
							</p>
						</Feature>
						<Feature>
							<span>workflows</span>
							<h3>Chuck Norris stuffed evil back into Pandora's Box</h3>
							<p>
								When Chuck Norris sends in his taxes, he sends blank forms and
								includes only a picture of himself
							</p>
						</Feature>
					</FeatureContainer>
				</Container>
			</Section>
		</>
	);
};
