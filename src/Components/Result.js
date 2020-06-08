import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Result = () => {
	const {
		state: { risk_score, period_score },
	} = useContext(PageContext);
	return (
		<div>
			<div>
				결과 페이지입니다. {risk_score} {period_score}
			</div>
			<div>
				<iframe
					title="facebook"
					src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fusaant%2F&tabs=timeline&width=500&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=575536876504340"
					width="500"
					height="70"
					style={{ border: "none", overflow: "hidden" }}
					scrolling="no"
					frameborder="0"
					allowTransparency="true"
					allow="encrypted-media"
				></iframe>
			</div>
		</div>
	);
};
