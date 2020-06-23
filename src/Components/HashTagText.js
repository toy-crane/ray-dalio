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
			<Text>#투자도 묵은지처럼 #요지부동</Text>
		</Flex>
	);
};
