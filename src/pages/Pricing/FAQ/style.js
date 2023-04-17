import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	position: relative;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 5%;
`;

export const Author = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	h3 {
		font-weight: bold;
		color: ${(props) => props.theme.colors.green};
		margin-bottom: 5px;
		font-size: 18px;
	}

	img {
		aspect-ratio: 1;
		object-fit: cover;
		height: 5em;
	}
`;
