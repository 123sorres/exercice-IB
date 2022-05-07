import React from 'react';
import PlayerForm from './PlayerForm';

const PlayerAdd = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <PlayerForm player={null}/>
                </div>
            </div>
        </div>
    );
}



export default PlayerAdd;