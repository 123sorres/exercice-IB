import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const PlayerList = () => {
    const players = useSelector(state => state.players);
    
    return (
        <div className="row">
            {players.length === 0 ? (<div className="col mt-4 pt-4 d-flex justify-content-center align-items-center"><h1>Aucun joueur</h1></div>) : ''}
            {players.map((player, index) => (
                <React.Fragment key={player._id}>
                    <div className="col-2">
                    <Link to={'/player/' + player._id}>
                    <PlayerCard player={player} hasLink={true}/>
                    </Link>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default PlayerList;