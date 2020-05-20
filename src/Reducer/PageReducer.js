export default (state, action) => {
	switch (action.type) {
		case "next":
			return { page: state.page + 1 };
		default:
			return;
	}
};
