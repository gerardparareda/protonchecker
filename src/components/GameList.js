import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectGame, fetchGames } from '../actions';

class GameList extends Component {
    renderList() {
        return this.props.games.map((game) => {
            return (
                <div className="item" key={game.title}>
                    <div className="content">{game.title}</div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    };
}

const mapStateToProps = state => {
    return { 
        games: state.games 
    };
}

export default connect(mapStateToProps, { selectGame, fetchGames })(GameList);