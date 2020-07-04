import React from "react";
import { Flex } from "rebass";
import { RecommendationCard } from "./RecommendationCard";

export const Recommendation = (props) => {
	return (
		<Flex justifyContent="space-around" px={[1, 5]} {...props}>
			<RecommendationCard name={props.good_pick} type="good" mx={2} />
			<RecommendationCard name={props.bad_pick} type="bad" mx={2} />
		</Flex>
	);
};
