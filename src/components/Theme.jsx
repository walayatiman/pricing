import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		dark: '#2d3439',
		green: '#169a7a',
		grey: '#5d656b',
	},
	fontSizes: {
		small: 'clamp(14px, 5vw, 16px)',
		medium: 'clamp(16px, 5vw, 20px)',
		large: 'clamp(18px, 5vw, 24px)',
		xlarge: 'clamp(20px, 5vw, 36px)',
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
