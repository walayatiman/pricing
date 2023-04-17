import React from 'react';
import { Card } from './Card';
import {
	CardContainer,
	Container,
	Heading,
	Join,
	Post,
	Posts,
	Section,
	Social,
} from './styles';
import blue from './images/community.svg';
import red from './images/updates.svg';
import green from './images/resources.svg';
import fb from './images/fb.svg';
import ig from './images/ig.svg';
import rss from './images/rss.svg';
import { FiArrowRight } from 'react-icons/fi';
import { updates } from './updates';
import { resources } from './resources';
import { Button } from '../Button';

const What = () => {
	const update = updates;
	const resource = resources;
	return (
		<Section>
			<Container>
				<Heading>What's New</Heading>
				<CardContainer>
					<Card title="The Community" img={blue}>
						<Social>
							<section>
								<img src={fb} alt="Social Media" />
							</section>
							<div>
								<p>
									Collaborate with others in your industry in our Facebook
									Community
								</p>
								<a href="http://google.com">
									Join Us <FiArrowRight />
								</a>
							</div>
						</Social>
						<Social>
							<section>
								<img src={ig} alt="Social Media" />
							</section>
							<div>
								<p>Get a behind the scenes look into what makes us, us</p>
								<a href="http://google.com">
									Join Us <FiArrowRight />
								</a>
							</div>
						</Social>
						<Social>
							<section>
								<img src={rss} alt="Social Media" />
							</section>
							<div>
								<p>Explore contents for small business owners</p>
								<a href="http://google.com">
									Join Us <FiArrowRight />
								</a>
							</div>
						</Social>
					</Card>
					<Card title="Updates" img={red}>
						<Social>
							<Posts>
								{update.map((items) => (
									<Post key={items.id}>
										<h3>{items.category}</h3>
										<h2>{items.title}</h2>
										<p>{items.date}</p>
									</Post>
								))}
								<a href="http://google.com">
									View all our updates <FiArrowRight />
								</a>
							</Posts>
						</Social>
					</Card>
					<Card title="Resources" img={green}>
						<Social>
							<Posts>
								{resource.map((items) => (
									<Post key={items.id}>
										<h3>{items.category}</h3>
										<h2>{items.title}</h2>
										<a href="http://google.com" className="greeLink">
											{items.button} <FiArrowRight />
										</a>
									</Post>
								))}
							</Posts>
						</Social>
					</Card>
				</CardContainer>
			</Container>
			<Container>
				<Join>
					<h2>Join the family</h2>
					<p>No time limit. No credit card required</p>
					<Button color="green">Start for free</Button>
				</Join>
			</Container>
		</Section>
	);
};

export default What;
