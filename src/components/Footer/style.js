import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
	background-color: #17a17e;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
	padding-top: 0;
	text-align: center;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	* {
		margin-bottom: 15px;
	}
`;

export const Info = styled.div`
	color: #fff;
	text-align: left;
	width: 40em;

	img {
		margin-bottom: 3em;
		width: 100%;
		max-width: 250px;
	}
	.social-container {
		display: flex;
		gap: 1rem;
		margin-bottom: 2em;

		a {
			margin-bottom: 0;
			transition: all ease-in-out 0.25s;

			&:hover {
				opacity: 0.8;
			}
		}

		svg {
			fill: #fff;
			margin-bottom: 0;
		}
	}
`;

export const Linkz = styled.div`
	text-align: left;
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
	gap: 2rem;
	flex-wrap: wrap;
	h4 {
		font-weight: bold;
		color: #fff;
		margin-bottom: 2em;
	}

	a {
		color: #fff;
		text-decoration: none;
		font-size: 16px;
		transition: all ease-in-out 0.25s;

		&:hover {
			opacity: 0.8;
		}
	}
`;
