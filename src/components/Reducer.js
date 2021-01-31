export const initialState = {
    user: null,
    search: {ticker: '', price: ''},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state, user: action.user
            };
        case "SET_SEARCH":
            return {
                ...state, search: action.search
            };
        default:
            return state;
    }
};

export default reducer;