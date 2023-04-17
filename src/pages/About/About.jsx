import React from 'react';
import { Header } from './Sections/Header/Header';
import styled from 'styled-components';
import { People } from './Sections/People/People';

const Contain = styled.div`
	padding-top: 80px;
	position: relative;
`;
const About = () => {
	return (
		<Contain>
			<Header />
			<People />
		</Contain>
	);
};

export default About;
