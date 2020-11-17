import React from "react";

export function Header() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lets build this landing page using React Function Components.
				The idea is to split Bootstrap components into different
				function Components, they will be all imported in the main
				component Home.jsx
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to Action
			</a>
		</div>
	);
}
