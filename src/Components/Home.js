import React from "react";
import { Button } from "rebass";
import { useHistory } from "react-router-dom";

export const Home = () => {
	let history = useHistory();
	return (
		<div>
			이 곳은 홈입니다.
			<Button onClick={() => history.push("/quizzes")}>시작하기</Button>
		</div>
	);
};
