import React from "react";
import { Card, Image, Heading } from "rebass";
import Text from "./Text";

const description = {
	etf: "분산투자의 정석 ETF",
	bio: "핫한 BIO주",
	dividend: "주식판 월세 고배당주",
	bluechip: "안정적인 우량주",
	it: "미래에 장기 투자 IT주",
	theme: "롤러코스터 테마주",
};

export const RecommendationCard = (props) => {
	return (
		<Card width={200} textAlign="center">
			<Heading fontSize={[1, 3]}>
				{props.type === "good"
					? "나를 부자로 만드는"
					: "나를 가난하게 만드는"}
			</Heading>
			<Image src={`/icons/${props.name}.png`} />
			<Text fontSize={[0, 2]}>{description[props.name]}</Text>
		</Card>
	);
};
