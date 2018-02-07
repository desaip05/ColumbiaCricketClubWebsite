import React, { Component } from "react";

import Carousel from "./carousel.jsx";
class HomePage extends Component {
	render() {
		//Date for Carousel
		const carouselItems = [
			{
				id: 1,
				imageURL: "images/banners/bannerimage1.jpg",
				content: "Play with Us!"
			},
			{
				id: 2,
				imageURL: "images/banners/bannerimage2.jpg",
				content: "Join the practice sessions!"
			},
			{
				id: 3,
				imageURL: "images/banners/bannerimage3.jpg",
				content: "Join the Partnership!"
			}
		];
		
		return (
			<div class="homePage">
				<div class="carousel-container">
					<Carousel slides={carouselItems} />
				</div>
			</div>
		);
	}
}
export default HomePage;