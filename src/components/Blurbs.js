import React from 'react';
import Folder from '../images/folder.svg';
import FolderBg from '../images/iconbg.svg';
import Invoice from '../images/invoices.svg';
import InvoiceBg from '../images/iconbgtwo.svg';
import Lightning from '../images/lightning.svg';
import LightningBg from '../images/iconbgthree.svg';
import Tray from '../images/file-tray.svg';
import TrayBg from '../images/iconbgfour.svg';
import Calendar from '../images/Frame.svg';
import CalendarBg from '../images/iconbgfive.svg';
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';

const Icon = styled.img`
	max-width: 35px;
	margin-left: 2%;
	position: relative;
	z-index: 2;
`;

const IconBg = styled.img`
	position: absolute;
	left: 0;
	z-index: 1;
	top: -10px;
`;

const Blurbed = styled.div`
	position: relative;
`;

const BlurbTitle = styled.h3`
	font-weight: bold;
	margin: 5% 0;
`;

const BlurbContent = styled.p`
	line-height: 1.6em;
	margin-bottom: 5%;
`;

const BlurbLink = styled.a`
	text-decoration: none;
	font-weight: bold;
	color: ${(props) => props.theme.colors.green};
	display: flex;
	align-items: center;
	width: max-content;

	svg {
		transition: all ease-in-out 0.25s;
	}

	&:hover {
		svg {
			transform: translateX(8px);
		}
	}
`;

const data = [
	{
		title: 'Customizable form templates',
		content:
			'Impress clients and potential-clients with contracts, lead capture forms, questionnaires, and proposals that look like your brand, not ours.',
		link: 'Forms & Templates',
		url: '#',
		img: Folder,
		bg: FolderBg,
	},
	{
		title: 'Easy-to-pay online invoices',
		content:
			'Payday has never come easier. Send online invoices to your clients and automate reminders so they never miss a due date.',
		link: 'Invoicing & Reporting',
		url: '#',
		img: Invoice,
		bg: InvoiceBg,
	},
	{
		title: 'Personable automation',
		content:
			'Automate the day-to-day "office work" of your business by using workflows & appointment schedulers, without ever losing the personal touch.',
		link: 'Automation',
		url: '#',
		img: Lightning,
		bg: LightningBg,
	},
	{
		title: 'Interactive Client Portals',
		content:
			'Clients can access project details, view documents, pay invoices, and more directly through their client portal.',
		link: 'Client Portals',
		url: '#',
		img: Tray,
		bg: TrayBg,
	},
	{
		title: 'Built-in scheduler',
		content:
			'Our scheduler allows clients to book calls, sessions, and appointments right from your website so you can spend less time coordinating with clients and more time connecting with them. ',
		link: 'Scheduling',
		url: '#',
		img: Calendar,
		bg: CalendarBg,
	},
];

const Blurbs = () => {
	return (
		<>
			{data.map((e, index) => {
				return (
					<Blurbed key={index}>
						<IconBg src={e.bg} alt="blurb bg" />
						<Icon src={e.img} alt="blurb" />
						<BlurbTitle>{e.title}</BlurbTitle>
						<BlurbContent>{e.content}</BlurbContent>
						<BlurbLink href={e.url}>
							{e.link}
							<BsArrowRightShort size={30} />
						</BlurbLink>
					</Blurbed>
				);
			})}
		</>
	);
};

export default Blurbs;
