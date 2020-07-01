import React from "react";
import { Heading } from "rebass";

const customStyled = {
	padding: "10px",
	color: "primary",
	fontWeight: "bold",
	textAlign: "center",
	lineHeight: "heading",
	fontSize: [5, 6],
};

export default (props) => {
	return (
		<Heading {...props} sx={customStyled}>
			{props.children}
		</Heading>
	);
};
