import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { selectGame } from '../actions';

const gameReducer = () => {
    return [
        {title: "game1", desc: "game1 desc"},
        {title: "game2", desc: "game2 desc"},
        {title: "game3", desc: "game3 desc"},
        {title: "game4", desc: "game4 desc"}
    ];
};

const selectedGameReducer = (selectedGame=null, action) => {
    if(action.type === 'GAME_SELECTED') {
        return action.payload;
    }

    return selectedGame;
}

export default combineReducers({
    games: gameReducer,
    selectedGame: selectedGameReducer,
    form: formReducer
});