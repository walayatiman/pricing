import React from 'react';
import { Blurb } from './Blurb';
import { BlurbContainer, Container, Section } from './styles';
import IconbgOne from '../../../images/iconbg.svg';
import Folder from '../../../images/folder.svg';
import Form from './images/forms.svg';
import Invoice from './images/invoicing.svg';
import InvoiceIcon from './images/invoice.svg';
import IconbgTwo from '../../../images/iconbgtwo.svg';
import IconbgThree from '../../../images/iconbgthree.svg';
import IconbgFour from '../../../images/iconbgthree.svg';
import Lightning from './images/lightning.svg';
import Auto from './images/automation.svg';
import Calendar from './images/calendar.svg';
import Schedule from './images/scheduling.svg';

export const Sec = () => {
	return (
		<Section>
			<Container>
				<BlurbContainer>
					<Blurb
						bg={IconbgOne}
						img={Folder}
						subtitle="There is no theory of evolution"
						title=" Just a list of animals Chuck Norris allows to live"
						text="CNN was originally created as the 'Chuck Norris Network' to update Americans with on-the-spot ass kicking in real-time."
					/>
					<img src={Form} alt="blurb sample" />
				</BlurbContainer>
				<BlurbContainer>
					<Blurb
						bg={IconbgTwo}
						img={InvoiceIcon}
						subtitle="Forever Chuck Norris doesn't use batteries"
						title="He powers things by touching them"
						text="When Chuck Norris tells a joke, anyone who hears it DIES of laugher"
					/>
					<img src={Invoice} alt="blurb sample" />
				</BlurbContainer>
				<BlurbContainer>
					<Blurb
						bg={IconbgThree}
						img={Lightning}
						subtitle="Forever Chuck Norris doesn't use batteries"
						title="He powers things by touching them"
						text="When Chuck Norris tells a joke, anyone who hears it DIES of laugher"
					/>
					<img src={Auto} alt="blurb sample" />
				</BlurbContainer>
				<BlurbContainer>
					<Blurb
						bg={IconbgFour}
						img={Calendar}
						subtitle="Forever Chuck Norris doesn't use batteries"
						title="He powers things by touching them"
						text="When Chuck Norris tells a joke, anyone who hears it DIES of laugher"
					/>
					<img src={Schedule} alt="blurb sample" />
				</BlurbContainer>
			</Container>
		</Section>
	);
};
