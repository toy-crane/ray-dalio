import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { Flex, Box } from "rebass";

export const QuizHeader = () => {
	const {
		state: { page, pageCount },
	} = useContext(PageContext);
	return (
		<Flex>
			<Box
				flex="1 1 auto"
				py={3}
				fontSize={2}
				fontWeight="bold"
				color="secondary"
			>
				Q{page}
			</Box>
			<Flex alignItems="center" justifyItems="center">
				<Box
					sx={{
						display: "inline-block",
						color: "darkgrey",
						bg: "grey",
						px: 2,
						py: 1,
						borderRadius: 9999,
					}}
					fontSize={1}
					flex="0 0 auto"
				>
					{page}/{pageCount}
				</Box>
			</Flex>
		</Flex>
	);
};
