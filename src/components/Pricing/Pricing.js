import React, { useState } from 'react';
import {
	Btn,
	Container,
	Heading,
	Price,
	PricingCard,
	Section,
	Subtitle,
} from './styles';
import { packages } from './packages';
import { Button } from '../Button';

export const Pricing = () => {
	const { monthly, annual } = packages;

	const [state, setState] = useState({
		active: 'monthly',
		pricingPlan: monthly,
	});

	const handlePricingPlan = (plan) => {
		if (plan === 'annual') {
			setState({ ...state, active: 'annual', pricingPlan: annual });
		} else {
			setState({ ...state, active: 'monthly', pricingPlan: monthly });
		}
	};
	return (
		<Section>
			<Container>
				<Heading>Robust Software. Surprisingly simple pricing.</Heading>
				<Subtitle>
					Get unlimited access to powerful tools that grow with your business.
					Start for free and upgrade when the time is right.
				</Subtitle>
				<div>
					<Btn
						href="#"
						className={state.active === 'annual' ? 'active' : ''}
						aria-label="Annualy"
						onClick={() => handlePricingPlan('annual')}
					>
						annual
					</Btn>
					<Btn
						href="#"
						className={state.active === 'monthly' ? 'active' : ''}
						aria-label="Monthly"
						onClick={() => handlePricingPlan('monthly')}
					>
						monthly
					</Btn>
				</div>
				<PricingCard>
					{state.pricingPlan.map((packageData) => (
						<div key={packageData.id}>
							<h2>{packageData.name}</h2>
							<p>{packageData.description}</p>
							<Price>
								{packageData.priceWithUnit}
								<span>/monthly</span>
							</Price>
							<ul>
								{packageData.points.map((e) => (
									<li key={e.id}>
										{e.icon}
										{e.text}
									</li>
								))}
							</ul>
							<Button color="green">{packageData.buttonText}</Button>
						</div>
					))}
				</PricingCard>
			</Container>
		</Section>
	);
};
