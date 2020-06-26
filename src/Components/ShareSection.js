import React from "react";
import { Box, Flex } from "rebass";
import { ShareButtonList } from "./ShareButtonList";
import Text from "./Text";

export const ShareSection = (props) => {
	return (
		<Box {...props}>
			<Flex justifyContent="center" alignContent="center">
				<Text color="secondary" fontWeight="bold" p={1} my={1}>
					나의 투자 성향 공유하기
				</Text>
			</Flex>
			<ShareButtonList />
		</Box>
	);
};
