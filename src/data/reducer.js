import initialState from "./initial";


const setServer = (state, action) => {
    let changeServer = (state.player1 >= 20 && state.player2 >= 20 ? 2 : 5);
    return { ...state, player1Serve: (state.player1 + state.player2) % changeServer === 0 ? !state.player1Serve : state.player1Serve };
};

const player1 = (state, action) => {
    return { ...state, player1: state.player1 + 1 };
};

const player2 = (state, action) => {
    return { ...state, player2: state.player2 + 1 }
};

const winner = (state, action) => {
    return { ...state, }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER_1": return setServer(player1(state));
        case "PLAYER_2": return setServer(player2(state));
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;