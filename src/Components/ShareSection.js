import React from "react";
import { Box, Flex, Text } from "rebass";
import { ShareButtonList } from "./ShareButtonList";

export const ShareSection = (props) => {
	return (
		<Box {...props}>
			<Flex justifyContent="center" alignContent="center" mb={0}>
				<Text
					fontSize={2}
					color="secondary"
					fontWeight="bold"
					p={1}
					m="16px"
				>
					나의 투자 성향 공유하기
				</Text>
			</Flex>
			<ShareButtonList />
		</Box>
	);
};
