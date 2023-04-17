import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowRightShort } from 'react-icons/bs';
import SliderOne from '../images/slider1.jpg';
import SliderTwo from '../images/slider2.jpg';
import SliderThree from '../images/slider3.jpg';
import SliderFour from '../images/slider4.jpg';
import SliderFive from '../images/slider5.jpg';

const Slide = styled.div`
	overflow: hidden;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	border-radius: 15px;
`;

const Image = styled.img`
	width: 100%;
	max-height: 200px;
	object-fit: cover;
	overflow: hidden;
	height: 200px;
`;

const SlideContent = styled.div`
	padding: 10%;
`;

const Subtitle = styled.p`
	margin-bottom: 10px;
	color: #5d656b;
	text-transform: uppercase;
	font-size: 13px;
`;

const Title = styled.h3`
	font-weight: bold;
	color: #000;
	font-size: 18px;
`;

const Link = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.colors.green};
	margin-top: 1rem;
	width: max-content;
	display: flex;
	align-items: center;
	text-align: center;
	width: 100%;
	justify-content: center;

	svg {
		transition: all ease-in-out 0.25s;
	}

	&:hover {
		svg {
			transform: translateX(8px);
		}
	}
`;

const SlidersContainer = styled.div`
	position: absolute;
	width: 100%;
	right: 0;
	top: 0;
	max-width: 1200px;
	padding-top: 5%;
	.slick-slide {
		padding-right: 40px;

		@media (max-width: 500px) {
			padding-right: 0;
		}
	}
`;

const Sliderz = [
	{
		image: SliderOne,
		subtitle: 'Why Dubsado is perfect for',
		title: 'Doulas',
		url: '#',
	},
	{
		image: SliderTwo,
		subtitle: 'Why Dubsado is perfect for',
		title: 'Event Planners',
		url: '#',
	},
	{
		image: SliderThree,
		subtitle: 'Why Dubsado is perfect for',
		title: 'Event Planners',
		url: '#',
	},
	{
		image: SliderFour,
		subtitle: 'Why Dubsado is perfect for',
		title: 'Event Planners',
		url: '#',
	},
	{
		image: SliderFive,
		subtitle: 'Why Dubsado is perfect for',
		title: 'Event Planners',
		url: '#',
	},
];

export default class Responsive extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<SlidersContainer className="slider-container">
				<Slider {...settings}>
					{Sliderz.map((e, index) => {
						return (
							<Slide key={index}>
								<Image src={e.image} alt="slider" />
								<SlideContent>
									<Subtitle>{e.subtitle}</Subtitle>
									<Title>{e.title}</Title>
									<Link href={e.url}>
										Find out why
										<BsArrowRightShort size={25} />
									</Link>
								</SlideContent>
							</Slide>
						);
					})}
				</Slider>
			</SlidersContainer>
		);
	}
}
