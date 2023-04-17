import React from 'react';
import { Pricing } from '../../components/Pricing/Pricing';
import { Breakdown } from './BreakDown/Breakdown';
import Faq from './FAQ/Faq';
import { Join } from './Join/Join';
import { Pay } from './Pay/Pay';

const PricingPage = () => {
	return (
		<>
			<Pricing />
			<Breakdown />
			<Pay />
			<Join />
			<Faq />
		</>
	);
};

export default PricingPage;
