import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";

export const Advertisement = (props) => {
	return (
		<>
			<Box textAlign="center" {...props} p={1}>
				<Text color="secondary" fontWeight="bold" p={1}>
					내 성향에 딱! 맞는 추천 도서
					<span role="img" aria-label="glasses">
						{" "}
						🤓
					</span>
				</Text>
				<Flex justifyContent="center" my={1}>
					<iframe
						title="firstAd"
						src="https://coupa.ng/bEOdE7"
						width="200"
						height="250"
						frameBorder="0"
						scrolling="no"
					></iframe>
					<iframe
						title="secondAd"
						src="https://coupa.ng/bEOc1c"
						width="200"
						height="250"
						frameBorder="0"
						scrolling="no"
					></iframe>
				</Flex>
			</Box>
		</>
	);
};
