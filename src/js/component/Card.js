import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.text}</p>
			</div>

			<div className="card-body">
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	button: PropTypes.string,
	text: PropTypes.string
};
