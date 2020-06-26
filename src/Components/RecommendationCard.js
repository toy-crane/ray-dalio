import React from "react";
import { Card, Image, Heading } from "rebass";
import Text from "./Text";

export const RecommendationCard = (props) => {
	return (
		<Card width={200} textAlign="center">
			<Heading fontSize={[4, 5]}>
				{props.type === "good" ? "환상의 캐미" : "환장의 캐미"}
			</Heading>
			<Image src={`/icons/${props.name}.png`} />
			<Text>변동성이 큰 바이오주</Text>
		</Card>
	);
};
