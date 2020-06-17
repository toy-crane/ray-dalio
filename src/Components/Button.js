import React from "react";
import { Button } from "rebass";
export default (props) => (
	<Button
		{...props}
		fontSize={0}
		fontWeight="bold"
		lineHeight="button"
		px="20px"
		py="16px"
		sx={{
			":hover": {
				bg: "grey",
				opacity: "0.5",
			},
		}}
	>
		{props.children}
	</Button>
);
