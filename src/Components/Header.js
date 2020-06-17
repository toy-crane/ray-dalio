import React from "react";
import { Heading } from "rebass";

const customStyled = {
	paddingTop: "80px",
	paddingBottom: "10px",
	color: "primary",
	fontWeight: "bold",
	textAlign: "center",
	lineHeight: "heading",
	fontSize: [2],
};

export default ({ children }) => {
	return <Heading sx={customStyled}>{children}</Heading>;
};
