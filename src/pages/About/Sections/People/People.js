import React from 'react';
import { Person } from '../../../../components/Person';
import { Container, Section } from './styles';

export const People = () => {
	return (
		<Section>
			<Container>
				<Person
					name="Chuck Norris"
					title="CEO/Co-Founder/Head of Product"
					desc="Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing"
					
				/>
				<Person
					name="Chuck Norris"
					title="Co-Founder/CTO"
					desc="When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris."
					
				/><Person
					name="Chuck Norris"
					title="CPO"
					desc="Chuck Norris can make dead bodies talk to him at the crime scene"
					
				/>
				<Person
					name="Chuck Norris"
					title="Employee & Office Logistics Director"
					desc="The pursuit of happiness is after Chuck Norris."
					
				/><Person
					name="Chuck Norris"
					title="Head of Education"
					desc="Contrary to popular belief, Chuck Norris, not the box jellyfish of northern Australia, is the most venomous creature on earth"
					
				/>
				<Person
					name="Chuck Norris"
					title="Director of Development"
					desc="Chuck Norris does not get frostbite. Chuck Norris bites frost"
					
				/><Person
					name="Chuck Norris"
					title="Director of Product"
					desc="Chuck Norris makes Creepypasta look like My Little Pony."
					
				/>
				<Person
					name="Chuck Norris"
					title="Product Manager"
					desc="Chuck Norris can win a game of Connect Four in only three moves."
					
				/>
			</Container>
		</Section>
	);
};
