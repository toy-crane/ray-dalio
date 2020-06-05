const breakpoints = {
	_sm: "567px",
	_md: "768px",
};

const media = (pixels) => `@media (min-width: ${pixels})`;
const { _sm, _md } = breakpoints;

export const sm = media(_sm);
export const md = media(_md);
