import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;

const BaseBox = styled.div`
	height: 70%;
	position: absolute;
	left: 0;
	top: 15%;
	border-radius: 10px;
`;

const Background = styled(BaseBox)`
	background: ${(props) => props.theme.colors.deepGray};
	width: 100%;
`;

const Progress = styled(BaseBox)`
	background: ${(props) => props.theme.colors.primary};
	width: ${({ percent }) => percent}%;
`;

export const ProgressBar = ({ percent }) => {
	return (
		<Container>
			<Background />
			<Progress percent={percent} />
		</Container>
	);
};
