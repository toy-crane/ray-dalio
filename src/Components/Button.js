import React from "react";
import { Button } from "rebass";

const customStyled = {
	"@media not all and (pointer: coarse)": {
		":hover": {
			bg: "grey",
		},
	},
};

export default (props) => (
	<Button
		{...props}
		fontSize={0}
		fontWeight="bold"
		lineHeight="button"
		px="20px"
		py="16px"
		sx={customStyled}
	>
		{props.children}
	</Button>
);
