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
import { REPORTS } from "../DataSet/Report";

export const Result = (props) => {
	const characterCode = props.match.params.code.toLowerCase();
	useEffect(() => {
		window.analytics.page();
	}, []);
	if (!characterCode || !(characterCode in REPORTS)) {
		return <Redirect to="/" />;
	} else {
		const {
			text,
			image_url,
			hash_tags,
			good_pick,
			bad_pick,
			books,
			r_score,
			p_score,
			i_score,
			b_score,
		} = REPORTS[characterCode];
		return (
			<>
				<Header>나의 투자 성향과 비슷한 투자자는?</Header>
				<Image src={image_url} sx={{ margin: "10px auto" }} />
				<ScoreBarList
					mb={2}
					r_score={r_score}
					p_score={p_score}
					i_score={i_score}
					b_score={b_score}
				/>
				<HashTagText mb={2} text={hash_tags} />
				<BodyText mb={2} text={text} textAlign="center" />
				<Recommendation
					mb={2}
					good_pick={good_pick}
					bad_pick={bad_pick}
				/>
				<Advertisement mb={2} books={books} />
				<ShareSection mb={2} />
				<RefreshButton mb={2} />
				<FacebookShareButton />
			</>
		);
	}
};
