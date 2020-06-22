import React from "react";
import { Flex, Box } from "rebass";

const CustomStyled = {
	padding: [1],
	fontSize: [1, 3],
	fontWeight: "bold",
	color: "secondary",
	py: "5px",
};

export const QuizHeader = ({ page, pageCount }) => {
	return (
		<Flex justifyContent="center" alignContent="center">
			<Box sx={CustomStyled}>
				{page}/{pageCount}
			</Box>
		</Flex>
	);
};
