import React from "react";
import { Heading } from "rebass";

const customStyled = {
	padding: "10px",
	color: "primary",
	fontWeight: "bold",
	textAlign: "center",
	lineHeight: "heading",
	fontSize: [4, 5],
};

export default ({ children }) => {
	return <Heading sx={customStyled}>{children}</Heading>;
};
