import React from "react";
import { Box } from "rebass";


export const Question = ({ question }) => {
	return (
		<Box width={1} fontSize={2} py={4} fontWeight="bold" lineHeight="body">
			{question}
		</Box>
	);
};
