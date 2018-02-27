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
			},
			{
				id: 4,
				imageURL: "images/banners/bannerimage4.jpg",
				content: ""
			},
			{
				id: 5,
				imageURL: "images/banners/bannerimage5.jpg",
				content: ""
			},
			{
				id: 6,
				imageURL: "images/banners/bannerimage6.jpg",
				content: ""
			},
			{
				id: 7,
				imageURL: "images/banners/bannerimage7.jpg",
				content: ""
			},
			{
				id: 8,
				imageURL: "images/banners/bannerimage8.jpg",
				content: ""
			},
			{
				id: 9,
				imageURL: "images/banners/bannerimage9.jpg",
				content: ""
			},
			{
				id: 10,
				imageURL: "images/banners/bannerimage10.jpg",
				content: ""
			},
			{
				id: 11,
				imageURL: "images/banners/bannerimage11.jpg",
				content: ""
			},
			{
				id: 12,
				imageURL: "images/banners/bannerimage12.jpg",
				content: ""
			},
			{
				id: 13,
				imageURL: "images/banners/bannerimage13.jpg",
				content: ""
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