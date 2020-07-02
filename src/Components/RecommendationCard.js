import React from "react";
import { Card, Image, Heading } from "rebass";
import Text from "./Text";

const description = {
	etf: "분산투자의 정석 ETF",
	bio: "코로나 최대 수혜 섹터 BIO",
	dividend: "부동산에 월세가 있다면, 주식엔 배당이 있다 고배당주",
	bluechip: "크기가 큰 만큼, 안정적인 우량주",
	it: "다가올 미래에 장기 투자 대형 IT주",
	theme: "롤러코스터를 사랑한다면, 테마주",
};

export const RecommendationCard = (props) => {
	return (
		<Card width={200} textAlign="center">
			<Heading fontSize={[4, 5]}>
				{props.type === "good" ? "나를 부자로 만드는" : "나를 가난하게 만드는"}
			</Heading>
			<Image src={`/icons/${props.name}.png`} />
			<Text>{description[props.name]}</Text>
		</Card>
	);
};
