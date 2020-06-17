import React from "react";
import { Text } from "rebass";

const CustomStyled = {
	fontSize: [1],
	lineHeight: "body",
};

export default ({ children }) => {
	return <Text sx={CustomStyled}>{children}</Text>;
};
