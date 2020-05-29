import React from "react";
import { Button } from "rebass";
export default (props) => (
	<Button
		{...props}
		width={1}
		my={1}
		fontSize={1}
		height={100}
		fontWeight="bold"
		lineHeight="body"
		sx={{
			":hover": {
				bg: "secondary",
			},
		}}
	>
		{props.children}
	</Button>
);
