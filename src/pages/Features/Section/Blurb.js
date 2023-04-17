import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { BsArrowRightShort } from 'react-icons/bs';

export const BlurbItem = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;

	.blurb-icon {
		max-width: 40px;
		z-index: 3;
		display: block;
		position: relative;
	}

	.blurb-bg {
		position: absolute;
		top: -1em;
		left: -2em;

		@media (max-width: 767px) {
			left: 0;
		}
	}

	.img-container {
		width: 2em;
		position: relative;
	}

	h3 {
		font-weight: bold;
		font-size: ${(props) => props.theme.fontSizes.medium};
		margin-bottom: 1.5em;
	}

	span {
		margin-bottom: 0.5em;
		display: block;
	}

	p {
		line-height: 1.4em;
	}

	@media (max-width: 767px) {
		width: 100% !important;
	}

	.content {
		section {
			display: flex;
			gap: 1rem;

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				padding: 10px 25px !important;

				@media (max-width: 810px) {
					font-size: 12px !important;
				}
				&:last-child {
					border: none;
				}

				svg {
					margin: 0;
				}
			}
		}
	}
`;

export const Blurb = (props) => {
	return (
		<BlurbItem>
			<div className="img-container">
				<img src={props.img} alt="icon" className="blurb-icon" />
				<img src={props.bg} alt="bg" className="blurb-bg" />
			</div>
			<div className="content">
				<span>{props.subtitle}</span>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
				<section>
					<Button color="green">Learn More</Button>
					<Button>
						Start for free <BsArrowRightShort size={30} />
					</Button>
				</section>
			</div>
		</BlurbItem>
	);
};
