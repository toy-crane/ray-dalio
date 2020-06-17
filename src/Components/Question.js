import React from "react";
import { Box } from "rebass";

const CustomStyled = {
	width: "100%",
	fontSize: [1],
	py: "24px",
	fontWeight: "bold",
	lineHeight: "question",
};

export const Question = ({ question }) => {
	return <Box sx={CustomStyled}>{question}</Box>;
};
