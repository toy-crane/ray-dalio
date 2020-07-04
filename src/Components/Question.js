import React from "react";
import { Box } from "rebass";

const CustomStyled = {
	width: "100%",
	fontSize: 3,
	fontWeight: "bold",
	lineHeight: "question",
	textAlign: "center",
};

export const Question = (props) => {
	return (
		<Box sx={CustomStyled} {...props}>
			{props.question}
		</Box>
	);
};
