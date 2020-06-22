import React from "react";
import { Button } from "rebass";

const customStyled = {
	"@media not all and (pointer: coarse)": {
		":hover": {
			bg: "grey",
		},
	},
	":active": {
		bg: "grey",
	},
};

export default (props) => (
	<Button
		{...props}
		fontSize={1}
		fontWeight="bold"
		lineHeight="button"
		padding={1}
		sx={customStyled}
	>
		{props.children}
	</Button>
);
