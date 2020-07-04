import React from "react";
import Text from "./Text";
import { Flex } from "rebass";

export const HashTagText = (props) => {
	return (
		<Flex
			{...props}
			justifyContent="center"
			alignContent="center"
			color="secondary"
			fontWeight="bold"
		>
			<Text>{props.text}</Text>
		</Flex>
	);
};
