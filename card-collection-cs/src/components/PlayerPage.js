import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerForm from './PlayerForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePlayer } from '../actions/actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './css/PlayerPage.css';

const PlayerPage = () => {
    const params = useParams();
    const loaded = useSelector(state => state.loaded);
    const player = useSelector(state => state.players.find((value) => '' + value._id === params.id));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onDelete = (player) => {
        dispatch(deletePlayer(player._id));
        navigate('/')
    }
    
    let display;
    if (loaded && !player) {
        display = <h1>Pas de joueur trouvé.</h1>;
    } else if (loaded && player) {
        display = <div className="row d-flex justify-content-center">
                <div className="col d-flex align-items-center flex-column page-card">
                    <PlayerCard player={player} hasLink={false} />
                    <button type="button" onClick={onDelete.bind(this, player)} className="btn btn-danger">
                        Supprimer
                    </button>
                </div>
                <div className="col">
                    <PlayerForm player={player} />
                </div>
            </div>
    }
   
    return (
        <div className="container">
            {display}
        </div>
    );
}



export default PlayerPage;