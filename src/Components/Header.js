import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Header = () => {
	const {
		state: { page, pageCount },
	} = useContext(PageContext);
	return (
		<>
			<div>Q{page}</div>
			<div>
				{page}/{pageCount}
			</div>
		</>
	);
};
