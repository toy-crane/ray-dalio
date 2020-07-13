import React, { useEffect } from "react";
import { Image } from "rebass";
import Header from "./Header";
import { ScoreBarList } from "./ScoreBarList";

import { Recommendation } from "./Recommendation";
import { ShareSection } from "./ShareSection";
import { Advertisement } from "./Advertisement";
import { FacebookShareButton } from "./FacebookShareButton";
import { RefreshButton } from "./RefreshButton";
import { Redirect } from "react-router-dom";
import { REPORTS } from "../DataSet/Report";
import { ResultText } from "./ResultText";
import { Line } from "./Line";

export const Result = (props) => {
	const characterCode = props.match.params.code.toLowerCase();
	useEffect(() => {
		window.analytics.page();
		window.analytics.track("Character Page Viewed", {
			code: characterCode,
		});
	}, [characterCode]);
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
				<Header mb={1}>나와 비슷한 성향의 투자자는?</Header>
				<Image src={image_url} mb={4} />
				<Line />
				<ScoreBarList
					mb={4}
					r_score={r_score}
					p_score={p_score}
					i_score={i_score}
					b_score={b_score}
				/>
				<Line />
				<ResultText hash_tags={hash_tags} text={text} mb={4} />
				<Line />
				<Recommendation
					mb={4}
					good_pick={good_pick}
					bad_pick={bad_pick}
				/>
				<Line />
				<Advertisement mb={4} books={books} />
				<Line />
				<ShareSection mb={2} />
				<RefreshButton mb={2} />
				<FacebookShareButton mb={2} />
			</>
		);
	}
};
