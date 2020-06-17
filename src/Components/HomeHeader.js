import React from "react";
import { Heading } from "rebass";

const customStyled = {
	paddingTop: "80px",
	paddingTop: "80px",
	paddingBottom: "10px",
	color: "primary",
	fontWeight: "bold",
	textAlign: "center",
	lineHeight: "heading",
	fontSize: [2],
};

export const HomeHeader = ({ children }) => {
	return <Heading sx={customStyled}>{children}</Heading>;
};
