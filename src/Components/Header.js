import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Header = () => {
	const {
		state: { page, pageCount },
	} = useContext(PageContext);
	return (
		<>
			<div className="fl w-90">Q{page}</div>
			<div className="fl w-10">
				{page}/{pageCount}
			</div>
		</>
	);
};
