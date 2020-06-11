import initialState from "./initial";


const maxScore = 21;


//Changing the Server

const setServer = (state, action) => {
    let changeServer = (state.player1 >= 20 && state.player2 >= 20 ? 2 : 5);

    return { ...state, player1Serve: (state.player1 + state.player2) % changeServer === 0 ? !state.player1Serve : state.player1Serve };
};

//Updating the Scores

//update player1 score
const player1 = (state, action) => {
    return { ...state, player1: state.player1 + 1 };
};

//update player2 score
const player2 = (state, action) => {
    return { ...state, player2: state.player2 + 1 }
};

//Returning the Winner!
//The winner logic is business logic, so it should be in the reducer. The wording for the message is view logic so it should go in the component.

//check if there is a winner
const winningScore = state => state.player1 >= maxScore || state.player2 >= maxScore;

//check who the winner is
const winningPlayer = state => state.player1 > state.player2 ? 1 : 2;


//return the winner!
const winner = (state, action) => {
    return {
        ...state, winner: winningScore(state) ? winningPlayer(state) : ""
    }
};

//save the settings from the form
const saveSettings = (state, action) => {
    return {
        ...state,
        player1Name: action.player1Name,
        player2Name: action.player2Name,
        winningScore: action.winningScore,
        alternate: action.winningScore
    }
};


const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER_1": return winner(setServer(player1(state)));
        case "PLAYER_2": return winner(setServer(player2(state)));
        case "SAVE_SETTINGS": return saveSettings(state, action);
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;