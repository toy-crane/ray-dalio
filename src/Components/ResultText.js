import React from "react";
import { Box } from "rebass";
import { HashTagText } from "./HashTagText";
import { BodyText } from "./BodyText";

export const ResultText = ({ hash_tags, text }) => {
	return (
		<Box mb={2} px={[1, 5]}>
			<HashTagText text={hash_tags} />
			<BodyText text={text} textAlign="center" />
		</Box>
	);
};
