import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PlayerList = () => {
    const statePlayers = useSelector(state => state.players);
    const [players, setPlayers] = useState(statePlayers)
    const [filter, setFilter] = useState('');
    const [filterPos, setFilterPos] = useState('');
    const POSITIONS = ['Attaquant', 'Défenseur', 'Milieu'];

    const filterPlayers = (e) => {
        setFilter(e.target.value)
        if (filterPos) {
            setPlayers(statePlayers.filter(p => p.position === filterPos && (p.firstName + ' ' + p.lastName).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1));
        } else {
            setPlayers(statePlayers.filter(p => (p.firstName + ' ' + p.lastName).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1));
        }
    }

    const filterPlayersOnPosition = (e) => {
        const pos = e.target.value;
        setFilterPos(pos);
        if (filter) {
            if (pos) {
                setPlayers(statePlayers.filter(p => p.position === pos && (p.firstName + ' ' + p.lastName).toLowerCase().indexOf(filter.toLowerCase()) !== -1));
            } else {
                setPlayers(statePlayers.filter(p => (p.firstName + ' ' + p.lastName).toLowerCase().indexOf(filter.toLowerCase()) !== -1));
            }
        } else {
            if (pos) {
                setPlayers(statePlayers.filter(p => p.position === pos))
            } else {
                setPlayers(statePlayers);
            }
        }
    }

    useEffect(() => {
        setPlayers(statePlayers)
    }, [statePlayers])

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center p-2 flex-column">
                <div className="col mb-2">
                    <h5>Filtres</h5>
                </div>
                <div className="col mb-2">
                    <label>Nom/Prénom :&nbsp;</label>
                    <input type="text" value={filter} onChange={filterPlayers}></input>
                </div>
                <div className="col mb-2">
                    <label>Poste :&nbsp;</label>
                    <select onChange={filterPlayersOnPosition}>
                        <option value=""></option>
                        {
                            POSITIONS.map((position, index) => <option value={position} key={index}>{position}</option>)
                        }  
                    </select>
                </div>
            </div>
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
        </div>
    );
}

export default PlayerList;