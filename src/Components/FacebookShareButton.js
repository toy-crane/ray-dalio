import React from "react";
import { Flex } from "rebass";

export const FacebookShareButton = () => {
	return (
		<Flex justifyContent="center" my="20px">
			<iframe
				title="facebook"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fusaant%2F&tabs=timeline&width=500&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=575536876504340"
				width="400px"
				height="70"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameBorder="0"
				allow="encrypted-media"
			></iframe>
		</Flex>
	);
};
