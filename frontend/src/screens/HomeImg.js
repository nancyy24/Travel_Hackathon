import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/travel.jpg";
import img2 from "../img/goa.jpg";
import img3 from "../img/taj.jpg";
import img4 from "../img/jaipur.jpg";
import img5 from "../img/kerala.jpg";
import img6 from "../img/madurai.jpg";
import img7 from "../img/delhi.jpg";

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div style={{ width: "50%", height: "100%" }}>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img src={img1} alt="travel.jpg" />
					<Carousel.Caption>
						<h3>Ladakh</h3>
						<p className="homeimg-content">
							"Embracing a passion for mountains ensures an endless adventure,
							as there is always a new peak to explore, never leaving room for
							boredom to set in."
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img2} alt="goa.jpg" />
					<Carousel.Caption>
						<h3>Goa , India</h3>
						<p className="homeimg-content">
							"Perfect Family Getaway: Explore Goa with Exciting Holiday
							Packages"
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img3} alt="taj.jpg" />
					<Carousel.Caption>
						<h3>Taj Mahal , India</h3>
						<p className="homeimg-content">
							"Exploring Agra's Stunning Architecture: Capturing the Beauty of
							the Taj Mahal and Beyond"
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img4} alt="jaipur.jpg" />
					<Carousel.Caption>
						<h3>Jaipur , India</h3>
						<p className="homeimg-content">
							"Jaipur: Where the King's Artistry Turned Bricks into Exquisite
							Gems"
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img5} alt="kerala.jpg" />
					<Carousel.Caption>
						<h3>Alleppey , kerala</h3>
						<p className="homeimg-content">
							"Discovering Kerala: Unraveling the Charms of God's Own Country,
							from the Enchanting Backwaters of Kumarakom and Alleppey"
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img6} alt="madurai.jpg" />
					<Carousel.Caption>
						<h3>Madurai , Tamilnadu</h3>
						<p className="homeimg-content">
							“ Madurai Meenakshi Temple is an architectural wonder. When one
							climbs to the top of the South Tower to have a bird's eye view of
							Madurai”
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={img7} alt="delhi.jpg" />
					<Carousel.Caption>
						<h3>Delhi , India</h3>
						<p className="homeimg-content">
							“Delhi is a city of surprises, a city where the old and the new
							coexist in a strange harmony.”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default ControlledCarousel;
