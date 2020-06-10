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

export const saveSettings = (data) => {
    return {
        type: "SAVE_SETTINGS",
        data: data,

    }
};