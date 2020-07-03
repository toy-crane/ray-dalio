import React from "react";
import { Box } from "rebass";

export const ProgressBar = (props) => {
	const { percent } = props;

	return (
		<Box
			height="20px"
			width={1}
			backgroundColor="brightenGray"
			sx={{
				borderRadius: 50,
			}}
		>
			<Box
				height="100%"
				width={`${percent}%`}
				backgroundColor="primary"
				textAlign="center"
				sx={{
					borderRadius: "inherit",
				}}
			></Box>
		</Box>
	);
};
