import React from "react";
import { Text } from "rebass";

const CustomStyled = {
	fontSize: [1, 3],
	lineHeight: "body",
};

export default (props) => {
	return (
		<Text {...props} sx={CustomStyled}>
			{props.children}
		</Text>
	);
};
