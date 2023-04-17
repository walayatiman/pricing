import styled from 'styled-components';

export const Section = styled.div`
	display: block;
	width: 100%;
	background-color: #fff;
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 5%;
	text-align: center;
	background-color: rgba(203, 246, 234, 0.17);

	* {
		margin-bottom: 15px;
	}

	p {
		max-width: 80%;
		line-height: 1.6em;
		margin-inline: auto;
		font-size: ${(props) => props.theme.fontSizes.small};
	}
`;

export const Heading = styled.h2`
	font-size: ${(props) => props.theme.fontSizes.xlarge};
	font-weight: bold;
`;

export const Formed = styled.form`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	input {
		&:focus {
			box-shadow: 0 0 5px rgba(81, 203, 238, 1);
			outline: none;
			border: 1px solid rgba(81, 203, 238, 1);
		}

		@media (max-width: 670px) {
			width: 100%;
		}
	}
`;

export const Firstname = styled.input`
	width: 45%;
	padding: 6px 12px;
`;
export const Lastname = styled.input`
	width: 45%;
	padding: 6px 12px;
`;
export const Email = styled.input`
	width: 100%;
	padding: 6px 12px;
`;
export const Btn = styled.button`
	background-color: #1cc198;
	border: none;
	color: #fff;
	padding: 15px 15px;
	border-radius: 5px;
	font-size: ${(props) => props.theme.fontSizes.medium};
	margin-left: auto;
	margin-top: 3em;

	&:hover {
		cursor: pointer;
	}
`;
