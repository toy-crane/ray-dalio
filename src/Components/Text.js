import React from "react";
import { Text } from "rebass";

const CustomStyled = {
	fontSize: [0, 2],
	lineHeight: "body",
};

export default (props) => {
	return (
		<Text {...props} sx={CustomStyled}>
			{props.children}
		</Text>
	);
};
