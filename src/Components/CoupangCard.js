import React from "react";
import { Link, Image, Flex } from "rebass";

export const CoupangCard = (props) => {
	const ButtonClicked = () => {
		window.analytics.track("Shopping Button Clicked", {
			url: props.url,
			korName: props.title,
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
					alt={props.title}
					width="180"
					height="360"
				></Image>
			</Link>
		</Flex>
	);
};
