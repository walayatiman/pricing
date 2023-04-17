import './App.css';
import Header from '../src/components/Header.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import './components/Links';
import HomePage from './pages/Home';
import About from './pages/About/About';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme';

const Ap = styled.div`
	transition: all ease-in-out 0.25s;
	background-color: transparent;

	&.test {
		background-color: #1e1e1e;
		height: 100%;
		overflow: hidden;
	}
`;

export default function App() {
	return (
		<Theme>
			<Ap className="App">
				<GlobalFonts />
				<Routes>
					<Route
						element={
							<>
								<Header /> <Outlet />
							</>
						}
					>
						<Route index element={<HomePage />} />
						<Route path="/about" element={<About />} />
						<Route path="/features" element={<Features />} />
						<Route path="/pricing" element={<Pricing />} />
					</Route>
				</Routes>
				<Footer />
			</Ap>
		</Theme>
	);
}
