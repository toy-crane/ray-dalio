import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { Button } from "rebass";

export const Answer = (props) => {
	const { dispatch } = useContext(PageContext);
	const { text } = props;
	const onClick = () => dispatch({ type: "next" });
	return (
		<Button
			onClick={onClick}
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
			{text}
		</Button>
	);
};
