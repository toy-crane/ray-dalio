import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";
import { ProgressBar } from "./ProgressBar";

export const ScoreBarList = () => {
	return (
		<>
			<Box px={5} my={1}>
				<Flex my={2}>
					<Text mx={2} width="30%" fontWeight="bold">
						위험 성향
					</Text>
					<Box width="65%" mx={1}>
						<ProgressBar percent={70} />
					</Box>
				</Flex>
				<Flex my={2}>
					<Text mx={2} width="30%" fontWeight="bold">
						선호 투자 기간
					</Text>
					<Box width="65%" mx={1}>
						<ProgressBar percent={50} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};
