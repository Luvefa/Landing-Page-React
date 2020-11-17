import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Header } from "./Header.js";
import { Navbar } from "./Navbar.js";
import { Footer } from "./Footer.js";
import { Card } from "./Card.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-0">
			<div className="container-fluid">
				<Navbar />
				<div className="container">
					<Header />
					<div className="row">
						<div className="col">
							<Card
								name="Leo"
								button="Find Out More"
								text="Some quick example text to build on the card title and make
					up the bulk of the cards content."
							/>
						</div>
						<div className="col">
							<Card
								name="Jacob"
								button="More Here"
								text="A simple jumbotron-style component
				for calling extra attention to featured information."
							/>
						</div>
						<div className="col">
							<Card
								name="Velazco"
								button="Go There"
								text="Some quick example text to build on the card INFORMATION OF coding and coding."
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				<Footer />
			</div>
		</div>
	);
}
