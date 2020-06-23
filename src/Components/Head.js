import React from "react";
import { Helmet } from "react-helmet";

export const Head = () => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<title>나와 가장 비슷한 투자자는 누구일까?</title>
			<link
				rel="icon"
				type="image/png"
				sizes="64x64"
				href="favicons/favicon-64x64.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="favicons/favicon-16x16.png"
			/>
			<script src="static/kakao.min.js"></script>
		</Helmet>
	);
};
