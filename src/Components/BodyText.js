import React from "react";
import Text from "./Text";
import { Flex } from "rebass";

export const BodyText = (props) => {
	return (
		<Flex {...props} px={[1, 5]} py={1}>
			<Text>{props.text}</Text>
		</Flex>
	);
};
