export const initialState = {
    userID: 'dag',
    loadingDisplay: 'none',
    search: { price: '', plusButtonClass: '', searchedTicker: '' },
    watchlist: {
        ticker: [],
        price: []
    },
    portfolio: {
        
    },
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
        // case "SET_SEARCHP":
        //     return {
        //         ...state, search: {...state.search, price: action.searchP}
        //     };
        case "UPDATE_WATCHLIST":
            return {
                ...state, watchlist: action.watchlist
            };
        case "TOGGLE_LOADING":
            return {
                ...state, loadingDisplay: action.loadingDisplay
            }
        default:
            return state;
    }
};

export default reducer;