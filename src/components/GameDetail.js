import React from 'react';
import { connect } from 'react-redux';

const GameDetail = ({ game }) => {
    if(!game) {
        return <div>Select a Game</div>;
    }

    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Title: {game.title}
                <br/>
                Duration: {game.desc}    
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        game: state.selectedGame
    }
};

export default connect(mapStateToProps)(GameDetail);