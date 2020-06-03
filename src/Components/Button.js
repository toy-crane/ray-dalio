import React from "react";
import { Button } from "rebass";
export default (props) => (
	<Button
		{...props}
		fontSize={1}
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
