export const initialState = {
    userID: 'dag',
    search: {ticker: '', price: '', plusButtonClass: '', searchedTicker: ''},
    watchlist: {
        ticker: [],
        price: []
    },
    portfolio: {},
};

const reducer = (state, action) => {
    console.log(action.watchlist);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state, user: action.user
            };
        case "SET_SEARCH":
            return {
                ...state, search: action.search
            };
        case "UPDATE_WATCHLIST":
            return {
                ...state, watchlist: action.watchlist
            };
        default:
            return state;
    }
};

export default reducer;