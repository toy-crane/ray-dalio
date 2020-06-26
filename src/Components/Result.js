import React, { useEffect } from "react";
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
import { Redirect } from "react-router-dom";

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

export const Result = (props) => {
	const characterCode = props.match.params.code;
	console.log(`{characterCode} is ?`);
	if (!characterCode) {
		console.log("hello");
		return <Redirect to="/" />;
	} else {
		const character = characterCode[0];
		return (
			<>
				<Header>나의 투자 성향과 비슷한 투자자는?</Header>
				<Image
					src={`/characters/${character}.png`}
					sx={{ margin: "10px auto" }}
				/>
				<ScoreBarList mb={2} />
				<HashTagText mb={2} />
				<BodyText mb={2} text={sampleResult} />
				<Recommendation mb={2} />
				<Advertisement mb={2} />
				<ShareSection mb={2} />
				<RefreshButton mb={2} />
				<FacebookShareButton />
			</>
		);
	}
};
