// initial state of app
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
        averageC: [],
    },
    history: {
        ticker: [],
        price: [],
        shares: [],
        value: [],
        limit: [],
        date: []
    }
};

// reducer to defind different actions used by dispatch
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
                ...state, fund: action.data.fund, watchlist: action.data.watchlist, portfolio: action.data.portfolio, history: action.data.history
            };
        case "SET_SEARCH":
            return {
                ...state, search: action.search
            };
        case "UPDATE_FUND":
            return {
                ...state, fund: action.fund
            };
        case "UPDATE_WATCHLIST":
            return {
                ...state, watchlist: action.watchlist
            };
        case "UPDATE_PORTFOLIO":
            return {
                ...state, portfolio: action.portfolio
            };
        case "UPDATE_HISTORY":
            return {
                ...state, history: action.history
            };
        case "TOGGLE_LOADING":
            return {
                ...state, loadingDisplay: action.loadingDisplay
            };
        default:
            return state;
    }
};

export default reducer;