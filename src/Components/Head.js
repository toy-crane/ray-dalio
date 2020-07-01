import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { REPORTS } from "../DataSet/Report";

export const Head = () => {
	let location = useLocation();
	let og_description, og_image_url, og_title, og_url;
	if (location.pathname.includes("/result")) {
		og_url = location.pathname.split("/")[2];
		const report = REPORTS[og_url.toLowerCase()];
		og_title = report["og_title"];
		og_image_url = report["og_image_url"];
		og_description = report["text"];
	} else {
		og_title = "나와 성향이 비슷한 투자자 찾기";
		og_url = "http://www.usaant.kr";
		og_image_url = "opengraph/main.jpg";
		og_description =
			"세계의 전설적인 투자자들과 나의 투자 스타일을 비교해 볼까요?";
	}
	return (
		<Helmet>
			<meta property="fb:app_id" content="575536876504340" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={og_url} />
			<meta property="og:title" content={og_title} />
			<meta property="og:description" content={og_description} />
			<meta property="og:image" content={og_image_url} />
			<meta name="twitter:title" content={og_title} />
			<meta name="twitter:description" content={og_description} />
			<meta name="twitter:image" content={og_image_url} />
			<meta name="twitter:card" content="summary" />
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
			<script src="https://ads-partners.coupang.com/g.js"></script>
		</Helmet>
	);
};
