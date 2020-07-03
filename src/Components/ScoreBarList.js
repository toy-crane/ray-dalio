import React from "react";
import { Box } from "rebass";
import { ScoreBar } from "./ScoreBar";

export const ScoreBarList = (props) => {
	const { p_score, r_score, i_score, b_score } = props;
	return (
		<>
			<Box p={1}>
				<ScoreBar my={1} title="투기력" score={r_score} />
				<ScoreBar my={1} title="존버력" score={p_score} />
				<ScoreBar my={1} title="매매력" score={b_score} />
				<ScoreBar my={1} title="정보력" score={i_score} />
			</Box>
		</>
	);
};
