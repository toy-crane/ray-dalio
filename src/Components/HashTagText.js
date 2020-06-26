import React from "react";
import Text from "./Text";
import { Flex } from "rebass";

export const HashTagText = (props) => {
	return (
		<Flex
			{...props}
			justifyContent="center"
			alignContent="center"
			mb={0}
			color="secondary"
			fontWeight="bold"
			padding={1}
		>
			<Text>{props.text}</Text>
		</Flex>
	);
};
