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
					<Text mx={2} width={[2 / 5, 1 / 3]} fontWeight="bold">
						위험 성향
					</Text>
					<Box width={[3 / 5, 2 / 3]} mx={1}>
						<ProgressBar percent={r_score} />
					</Box>
				</Flex>
				<Flex my={2}>
					<Text mx={2} width={[2 / 5, 1 / 3]} fontWeight="bold">
						선호 투자기간
					</Text>
					<Box width={[3 / 5, 2 / 3]} mx={1}>
						<ProgressBar percent={p_score} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};
