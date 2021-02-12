export const initialState = {
    userID: '',
    loadingDisplay: 'none',
    fund: "",
    search: { price: 0, plusButtonClass: '', searchedTicker: '', shares: 0, averCost: 0 },
    watchlist: {
        ticker: [],
        price: [],
    },
    portfolio: {
        ticker: [],
        price: [],
        shares: [],
        purchaseP: [],
        averageC: [],
        purchaseD: []
    },
};


const reducer = (state, action) => {

    switch (action.type) {
        case "RESET":
            return initialState;
        case "SET_USER":
            return {
                ...state, userID: action.userID
            };
        case "LOAD_DATA":
            return {
                ...state, fund: action.data.fund, watchlist: action.data.watchlist, portfolio: action.data.portfolio
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