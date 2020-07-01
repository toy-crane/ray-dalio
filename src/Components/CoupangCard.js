import React from "react";
import { Link, Image, Flex } from "rebass";

export const CoupangCard = (props) => {
	const ButtonClicked = () => {
		window.analytics.track("Shopping Button Clicked", {
			product: props.url,
		});
	};
	return (
		<Flex p={1 / 2}>
			<Link
				{...props}
				href={props.url}
				target="_blank"
				onClick={ButtonClicked}
			>
				<Image
					src={props.imageUrl}
					alt={props.imageMessage}
					width="150"
					height="300"
				></Image>
			</Link>
		</Flex>
	);
};
