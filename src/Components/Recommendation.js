import React from "react";
import { Flex } from "rebass";
import { RecommendationCard } from "./RecommendationCard";

export const Recommendation = (props) => {
	return (
		<Flex justifyContent="space-around" px={5} py={1} {...props}>
			<RecommendationCard name="it" type="good" mx={2} />
			<RecommendationCard name="bio" type="bad" mx={2} />
		</Flex>
	);
};
