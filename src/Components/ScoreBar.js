import React from "react";
import { Flex } from "rebass";
import Text from "./Text";
import { ProgressBar } from "./ProgressBar";

export const ScoreBar = (props) => {
	return (
		<Flex {...props}>
			<Text mx={2} width={[1 / 3, 1 / 4]} fontWeight="bold">
				{props.title}
			</Text>
			<Flex width={[2 / 3, 3 / 4]} mx={2} alignItems="center">
				<ProgressBar percent={props.score} />
			</Flex>
		</Flex>
	);
};
