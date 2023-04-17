import React from 'react';
import { Container, Info, Linkz, Section } from './style';
import logo from '../../images/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Divider } from './divider';

const Footer = () => {
	return (
		<>
			<Divider />
			<Section>
				<Container>
					<Info>
						<img src={logo} alt="logo" />
						<div className="social-container">
							<a href="http://facebook.com">
								<FaFacebookF />
							</a>
							<a href="http://facebook.com">
								<FaInstagram />
							</a>
							<a href="http://facebook.com">
								<FaTwitter />
							</a>
							<a href="http://youtube.com">
								<FaYoutube />
							</a>
						</div>
						<p>Made with ❤️ in California</p>
						<p>© Dubsado</p>
					</Info>
					<Linkz>
						<div className="site-links">
							<h4>Product</h4>
							<ul>
								<li>
									<a href="/take-a-test-drive">Take a Test Drive </a>
								</li>
								<li>
									<a href="/why-dubsado">Why Dubsado?</a>
								</li>
								<li>
									<a href="/features">Features</a>
								</li>
								<li>
									<a href="/pricing">Pricing</a>
								</li>
								<li>
									<a href="/testimonials">Testimonials</a>
								</li>
								<li>
									<a href="/platform-comparison">Compare</a>
								</li>
							</ul>
						</div>
						<div className="site-links">
							<h4>Company</h4>
							<ul>
								<li>
									<a href="/About">About</a>
								</li>
								<li>
									<a href="/why-dubsado">Blog</a>
								</li>
								<li>
									<a href="/features">Privacy Policy</a>
								</li>
								<li>
									<a href="/pricing">Cancellation Policy</a>
								</li>
								<li>
									<a href="/testimonials">Disclosure Policy</a>
								</li>
							</ul>
						</div>
						<div className="site-links">
							<h4>Support</h4>
							<ul>
								<li>
									<a href="/take-a-test-drive">Contact</a>
								</li>
								<li>
									<a href="/why-dubsado">Help Center</a>
								</li>
								<li>
									<a href="/features">Schedule a Demo</a>
								</li>
								<li>
									<a href="/pricing">Join a Webinar</a>
								</li>
								<li>
									<a href="/testimonials">Book a 1:1 Call</a>
								</li>
								<li>
									<a href="/platform-comparison">Hire a Specialist</a>
								</li>
							</ul>
						</div>
					</Linkz>
				</Container>
			</Section>
		</>
	);
};

export default Footer;
