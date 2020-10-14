import React from 'react'

const FightStrategiesCard = (props) => {

    const { closeModal } = props;

    return (
        <div className="fight-strat-overlay">
            <div className="fight-strat-modal-content">
            <div className="close-modal-button-container" onClick={closeModal}>
                <span className="close-modal-button">X</span>
            </div>
            {props.children}
            </div>
      </div>
    )
}

export default FightStrategiesCard