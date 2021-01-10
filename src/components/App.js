import React from 'react';
import GameList from './GameList';
import GameDetail from './GameDetail';
import UserSearch from './UserSearch';

const App = () => {
    return (
        <div>
            <UserSearch />
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <GameList />
                    </div>
                    <div className="column eight wide">
                        <GameDetail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;