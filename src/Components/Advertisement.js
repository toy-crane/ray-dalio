import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";
import { useScript } from "../hooks/UseScript";
import { CoupangCard } from "./CoupangCard";

export const Advertisement = (props) => {
	const { n_book_url, g_book_url } = props;
	const [loaded, error] = useScript("https://ads-partners.coupang.com/g.js");
	if (loaded && !error) {
		return (
			<>
				<Box textAlign="center" {...props} p={1}>
					<Text color="secondary" fontWeight="bold" p={1}>
						내 성향에 딱! 맞는 추천 도서
						<span role="img" aria-label="glasses">
							{" "}
							🤓
						</span>
					</Text>
					<Flex justifyContent="center" my={1}>
						<CoupangCard
							url="https://coupa.ng/bFdysx"
							imageUrl="https://static.coupangcdn.com/image/affiliate/banner/d59e396246e4a834985a72d55146b971@2x.jpg"
						/>
						<CoupangCard
							url="https://coupa.ng/bFdysx"
							imageUrl="https://static.coupangcdn.com/image/affiliate/banner/d59e396246e4a834985a72d55146b971@2x.jpg"
						/>
					</Flex>
				</Box>
			</>
		);
	} else {
		return <div></div>;
	}
};
