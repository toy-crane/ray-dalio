import React from "react";
import { Box } from "rebass";
import { ScoreBar } from "./ScoreBar";

export const ScoreBarList = (props) => {
	const { p_score, r_score } = props;
	return (
		<>
			<Box p={1}>
				<ScoreBar my={2} title="위험 성향" score={r_score} />
				<ScoreBar my={2} title="투자 실행력" score={r_score} />
				<ScoreBar my={2} title="정보력" score={p_score} />
				<ScoreBar my={2} title="선호 투자기간" score={p_score} />
			</Box>
		</>
	);
};
