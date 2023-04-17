import React, { useEffect, useState } from 'react';
import { Container, Section } from './styles';
import Xero from './images/integrations.svg';

export const Integrations = () => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Section>
			<Container>
				<section>
					<span>integrations</span>
					<h3>There is no chin behind Chuck Norris' beard</h3>
					<p>
						Contrary to popular belief, America is not a democracy, it is a
						Chucktatorship. Chuck Norris is my Homeboy, If you poke Chuck Norris
						on Facebook, your account will be deleted
					</p>
				</section>
				<section>
					<img
						src={Xero}
						alt="Integrations"
						style={{ transform: `rotate(${offset / 30}deg)` }}
					/>
				</section>
			</Container>
		</Section>
	);
};
