import React from "react";
import { Box } from "rebass";
import { HashTagText } from "./HashTagText";
import { BodyText } from "./BodyText";

export const ResultText = (props) => {
	return (
		<Box {...props} px={[1, 5]}>
			<HashTagText text={props.hash_tags} mb={1} />
			<BodyText text={props.text} />
		</Box>
	);
};
