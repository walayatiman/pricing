/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

export const scroll = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolling(window.scrollY > 50);
		});
	}, []);
	return { scrolling };
};
