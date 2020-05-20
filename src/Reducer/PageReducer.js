export default (state, action) => {
	switch (action.type) {
		case "next":
			return { ...state, page: state.page + 1 };
		default:
			return;
	}
};
