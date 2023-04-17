import React from 'react';
import { Container, Info, Section } from './styles';
import face from './images/Jake.png';
import aqua from './images/aqua.svg';
import stone from './images/stone.svg';

export const Header = () => {
	return (
		<Section>
			<Container>
				<h2>The power of being self-funded.</h2>
				<Info>
					<div className="section">
						<p>
							Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and
							could eat a hammer and take a shotgun blast standing. Chuck Norris
							counted to infinity - twice, Chuck Norris does not get frostbite.
							Chuck Norris bites frost, Chuck Norris can lead a horse to water
							AND make it drink. The quickest way to a man's heart is with Chuck
							Norris' fist The chief export of Chuck Norris is Pain Chuck Norris
							invented Kentucky Fried Chicken's famous secret recipe, with
							eleven herbs and spices. But nobody ever mentions the twelfth
							ingredient: Fear.
						</p>
						<p>
							Chuck Norris originally appeared in the "Street Fighter II" video
							game, but was removed by Beta Testers because every button caused
							him to do a roundhouse kick. When asked bout this "glitch," Norris
							replied, "That's no glitch.", Contrary to popular belief, America
							is not a democracy, it is a Chucktatorship The leading causes of
							death in the United States are: 1. Heart Disease 2. Chuck Norris
							3. Cancer Chuck Norrs bar stools only have one leg.
						</p>
						<p>
							Fool me once, shame on you. Fool Chuck Norris once and he will
							roundhouse you in the face Chuck Norris is currently suing NBC,
							claiming Law and Order are trademarked names for his left and
							right legs CNN was originally created as the "Chuck Norris
							Network" to update Americans with on-the-spot ass kicking in
							real-time, Outer space exists because it's afraid to be on the
							same planet with Chuck Norris. Fool me once, shame on you.
						</p>
					</div>
					<div className="section">
						<img src={face} alt="author" />
						<img src={aqua} alt="circular" className="circular" />
						<img src={stone} alt="blob" className="blob" />
					</div>
				</Info>
			</Container>
			<div className="custom-shape-divider-top-1673585268">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</Section>
	);
};
