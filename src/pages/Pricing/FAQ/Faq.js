import React from 'react';
import { Author, Container, Section } from './style';
import Chuck from '../../../images/chuck.jpg';
import Collapse from './collapse';

const Faq = () => {
	return (
		<Section>
			<Container>
				<div>
					<h2>Frequently Asked Questions</h2>
				</div>
				<div className="testimonials">
					<p>
						Chuck Norris has not had to pay taxes, ever Chuck Norris is the only
						man to ever defeat a brick wall in a game of tennis. Chuck Norris
						looks gift horses in the mouth. Chuck Norris doesn’t wear a watch.
					</p>
					<Author>
						<img src={Chuck} alt="author" />
						<section>
							<h3>Chuck Norris</h3>
							<p>Brand Designer</p>
						</section>
					</Author>
					<Collapse />
				</div>
			</Container>
		</Section>
	);
};

export default Faq;
