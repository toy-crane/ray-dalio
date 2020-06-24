import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";

export const Advertisement = () => {
	return (
		<>
			<Box textAlign="center" my={2}>
				<Text>미국 개미가 강력추천하는 금융 서적</Text>
				<Flex justifyContent="center" my={1}>
					<iframe
						src="https://coupa.ng/bEOdE7"
						width="200"
						height="250"
						frameborder="0"
						scrolling="no"
					></iframe>
					<iframe
						src="https://coupa.ng/bEOc1c"
						width="200"
						height="250"
						frameborder="0"
						scrolling="no"
					></iframe>
				</Flex>
			</Box>
		</>
	);
};
