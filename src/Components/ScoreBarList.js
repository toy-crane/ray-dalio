import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";
import { ProgressBar } from "./ProgressBar";

export const ScoreBarList = () => {
	return (
		<>
			<Box my={1} p={[1, 5]}>
				<Flex my={2}>
					<Text mx={2} width={[2 / 5, 1 / 3]} fontWeight="bold">
						위험 성향
					</Text>
					<Box width={[3 / 5, 2 / 3]} mx={1}>
						<ProgressBar percent={70} />
					</Box>
				</Flex>
				<Flex my={2}>
					<Text mx={2} width={[2 / 5, 1 / 3]} fontWeight="bold">
						선호 투자기간
					</Text>
					<Box width={[3 / 5, 2 / 3]} mx={1}>
						<ProgressBar percent={50} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};
