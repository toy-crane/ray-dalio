import React from "react";
import { Image } from "rebass";
import Header from "./Header";
import { ScoreBarList } from "./ScoreBarList";
import { HashTagText } from "./HashTagText";
import { BodyText } from "./BodyText";
import { Recommendation } from "./Recommendation";
import { ShareSection } from "./ShareSection";
import { Advertisement } from "./Advertisement";
import { FacebookShareButton } from "./FacebookShareButton";
import { RefreshButton } from "./RefreshButton";

const sampleResult =
	"빈틈없고 철저하지만, 은근히 고리타분해서 당신은 양반집 \
주인이었을 듯 규칙, 질서 엄청 중요하게 생각해서 사회에 반항해본 \
적 없는 천상 양반 남한테 이래라저래라 잔소리 잘함. 근데 본인도 \
흠잡을 곳 없이 빠릿하게 행동해서 남들이 딱히 뭐라고도 못함 \
이웃집 양반이 농사 안된다고 고민을 털어놔도 딱히 공감은 못 \
하지만 어설프게 위로는 함 \
빈틈없고 철저하지만, 은근히 고리타분해서 당신은 양반집 \
주인이었을 듯 규칙, 질서 엄청 중요하게 생각해서 사회에 반항해본 \
적 없는 천상 양반 남한테 이래라저래라 잔소리 잘함. 근데 본인도 \
흠잡을 곳 없이 빠릿하게 행동해서 남들이 딱히 뭐라고도 못함 \
이웃집 양반이 농사 안된다고 고민을 털어놔도 딱히 공감은 못 \
하지만 어설프게 위로는 함 \
";

export const Result = () => {
	const character = JSON.parse(localStorage.getItem("character"));
	return (
		<>
			<Header>나의 투자 성향과 비슷한 투자자는?</Header>
			<Image
				src={`characters/${character}.png`}
				sx={{ margin: "10px auto" }}
			/>
			<ScoreBarList />
			<HashTagText mb={1} />
			<BodyText mb={3} text={sampleResult} />
			<Recommendation mb={2} />
			<ShareSection mb={4} />
			<RefreshButton mb={2} />
			<Advertisement my={2} />
			<FacebookShareButton />
		</>
	);
};
