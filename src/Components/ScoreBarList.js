import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";
import { ProgressBar } from "./ProgressBar";

export const ScoreBarList = (props) => {
	const { p_score, r_score } = props;
	return (
		<>
			<Box p={1}>
				<Flex my={2}>
					<Text mx={2} width={[1 / 3, 1 / 3]} fontWeight="bold">
						위험 성향
					</Text>
					<Flex width={[2 / 3, 2 / 3]} mx={2} alignItems="center">
						<ProgressBar percent={r_score} />
					</Flex>
				</Flex>
				<Flex my={2}>
					<Text mx={2} width={[1 / 3, 1 / 3]} fontWeight="bold">
						선호 투자기간
					</Text>
					<Flex width={[2 / 3, 2 / 3]} mx={2} alignItems="center">
						<ProgressBar percent={p_score} />
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
