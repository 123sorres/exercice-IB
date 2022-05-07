import React from 'react';
import './css/PlayerCard.css';

class PlayerCard extends React.Component {

    getAge(dateStr) {
        const today = new Date();
        const birthdayDate = new Date(dateStr);
        const m = today.getMonth() - birthdayDate.getMonth();
        let age = today.getFullYear() - birthdayDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        let positionClass;
        if (this.props.player?.position === 'Défenseur') {
            positionClass = 'border-def';
        } else if (this.props.player?.position === 'Milieu') {
            positionClass = 'border-middle';
        } else if (this.props.player?.position === 'Attaquant') {
            positionClass = 'border-att';
        }

        return (
            <div className={'row card pt-2 m-2 d-flex flex-column ' + positionClass}>
                <div className="col d-flex justify-content-center">
                    <div className="col-img d-flex align-items-center">
                        <img alt="portrait" className="img-card" src={this.props.player?.pictureLink} />
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <h6>{this.props.player?.firstName} {this.props.player?.lastName}</h6>
                </div>
                <div className="col d-flex justify-content-center">
                    <p>{this.props.player?.position}</p>
                </div>
                <div className="col d-flex justify-content-center">
                    <p>{this.getAge(this.props.player?.birthdayDate)} ans</p>
                </div>
            </div>
            
        );
    }
}

export default PlayerCard;