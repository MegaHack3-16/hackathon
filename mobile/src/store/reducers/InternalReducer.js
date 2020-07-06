const initialState = {
	constructionsList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'setConstructionsList': {
			return { ...state, constructionsList: action.payload.constructionsList };
		}

		default:
			return state;
	}
};
