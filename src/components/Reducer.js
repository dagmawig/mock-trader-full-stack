export const initialState = {
    userID: '',
    loadingDisplay: 'none',
    fund: 10000.00,
    search: { price: '', plusButtonClass: '', searchedTicker: '', shares: 0, averCost: 0 },
    watchlist: {
        ticker: [],
        price: [],
    },
    portfolio: {
        ticker: [],
        shares: [],
        purchaseP: [],
        averageC: [],
        purchaseD: []
    },
};

const reducer = (state, action) => {
    console.log(action.watchlist);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state, userID: action.userID
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