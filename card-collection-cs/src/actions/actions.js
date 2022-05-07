import { v4 as uuidv4 } from 'uuid';
import { ADD_PLAYER, DELETE_PLAYER, EDIT_PLAYER, FETCH_PLAYERS } from './types';

export const fetchPlayers = () => {
    return async dispatch => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch('/api/players', requestOptions)
            .then(res => res.json())
            .then((players) => {
                    dispatch({
                        type: FETCH_PLAYERS,
                        payload: players
                    })
                    return players;
                }
            ).catch(error => console.log(error))
    }
}

export const addPlayer = (values) => {
    return async dispatch => {
        values._id = uuidv4();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        await fetch('/api/players', requestOptions)
            .then(result => result.json())
            .then((players) => {
                    dispatch({
                        type: ADD_PLAYER,
                        payload: players
                    })
                    return players;
                }
            ).catch(error => console.log(error))
    }
}

export const editPlayer = (values, id) => {
    return async dispatch => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        await fetch('/api/players/' + id, requestOptions)
            .then(result => result.json())
            .then((player) => {
                    dispatch({
                        type: EDIT_PLAYER,
                        payload: player
                    })
                    return player;
                }
            ).catch(error => console.log(error))
    }
}

export const deletePlayer = (id) => {
    return async dispatch => {
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch('/api/players/' + id, requestOptions)
            .then(result => result.json())
            .then((player) => {
                    dispatch({
                        type: DELETE_PLAYER,
                        payload: id
                    })
                    return player;
                }
            ).catch(error => console.log(error))
    }
}