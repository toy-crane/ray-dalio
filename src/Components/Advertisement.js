import React from "react";
import { Flex, Box } from "rebass";
import Text from "./Text";
import { useScript } from "../hooks/UseScript";
import { CoupangCard } from "./CoupangCard";

export const Advertisement = (props) => {
	const { gBook, nBook } = props.books;
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
					<Flex justifyContent="center">
						<CoupangCard
							url={gBook.url}
							imageUrl={gBook.imageUrl}
							title={gBook.korName}
						/>
						<CoupangCard
							url={nBook.url}
							imageUrl={nBook.imageUrl}
							title={nBook.korName}
						/>
					</Flex>
				</Box>
			</>
		);
	} else {
		return <div></div>;
	}
};
