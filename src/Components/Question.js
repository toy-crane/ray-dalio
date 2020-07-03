import React from "react";
import { Box } from "rebass";

const CustomStyled = {
	width: "100%",
	fontSize: [1, 3],
	py: "24px",
	fontWeight: "bold",
	lineHeight: "question",
	textAlign: "center",
};

export const Question = ({ question }) => {
	return <Box sx={CustomStyled}>{question}</Box>;
};
