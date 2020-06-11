export const player1 = () => {
    return {
        type: "PLAYER_1",
    }
};

export const player2 = () => {
    return {
        type: "PLAYER_2",
    }
};

export const reset = () => {
    return {
        type: "RESET",
    }
};

export const saveSettings = ({ player1Name, player2Name, winningScore, alternate }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: player1Name,
        player2Name: player2Name,
        winningScore: +winningScore,
        alternate: +alternate,

    }
};