import styled from 'styled-components';
import { BlurbItem } from './Blurb';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
	padding-top: 7em;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;

	* {
		margin-bottom: 15px;
	}
`;

export const BlurbContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 3% 0;

	@media (max-width: 767px) {
		flex-direction: column;

		img {
			width: 100% !important;
		}
	}

	${BlurbItem}, img {
		flex: 1 1 0;
		width: 0;
	}

	&:nth-child(even) {
		flex-direction: row-reverse;

		@media (max-width: 767px) {
			flex-direction: column;
		}
	}
`;
