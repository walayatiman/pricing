import React from 'react';
import { Grow } from './Grow';
import { Container, Section } from './style';

export const Pay = () => {
	return (
		<Section>
			<Container>
				<section>
					<span>ADD-ONS</span>
					<h3>Pay as you grow</h3>
				</section>

				<Grow
					title="brands"
					content="Manage each of your businesses with separate brands. Swap between them with just a click."
				>
					<h3>$10</h3>
					<p>PER ADDITIONAL BRAND, PER MONTH</p>
				</Grow>
				<Grow
					title="Users"
					content="Bring your team with you. Customize the account access for each user. Enjoy 3 additional users for free."
				>
					<p>
						4–10 users: <strong>25/mo</strong>
					</p>
					<p>
						11–20 users: <strong>$45/mo</strong>
					</p>
					<p>
						21–30 users: <strong>$60/mo</strong>
					</p>
					<span>
						For 30+ users, shoot us an email and we are happy to help!
					</span>
				</Grow>
			</Container>
		</Section>
	);
};
