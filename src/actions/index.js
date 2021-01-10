// Action creator
export const selectGame = (game) => {
    // Return an action
    return {
        type: 'GAME_SELECTED',
        payload: game
    };
};

export const fetchGames = () => {
    
    return {
        type: 'FETCH_GAMES',
        payload: 'nothing'
    }
}