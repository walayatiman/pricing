import React from 'react';
import { useState } from 'react';

import {
	Container,
	Email,
	Firstname,
	Heading,
	Lastname,
	Section,
	Formed,
	Btn,
} from './styles';

const Form = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setFirstName('');
		setLastName('');
		setEmail('');
	};
	return (
		<Section>
			<Container>
				<Heading>Here's how it'll look</Heading>
				<p>
					Step into your client's shoes—take a peek at how things will look on
					their end. Fill out your name and email to receive a proposal,
					contract, and invoice (which you shouldn't pay, but we won't stop
					you).
				</p>
				<Formed onSubmit={handleSubmit} autoComplete="off">
					<Firstname
						type="text"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required="required"
						placeholder="First Name"
					/>
					<Lastname
						type="text"
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required="required"
						placeholder="Last Name"
					/>
					<Email
						type="text"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>

					<Btn type="submit">Submit</Btn>
				</Formed>
			</Container>
		</Section>
	);
};

export default Form;
