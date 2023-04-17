import React from 'react';
import { Pricing } from '../../components/Pricing/Pricing';
import { Header } from './Header/Header';
import { Integrations } from './Integrations/Integrations';
import { More } from './More/More';
import { Sec } from './Section/Section';

const Features = () => {
	return (
		<>
			<Header />
			<Sec />
			<More />
			<Integrations />
			<Pricing />
		</>
	);
};

export default Features;
