import React, {useState} from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import SiteModal from 'Components/SiteModal'

const FundamentalCards = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState({})

    const displayCards = fundamentalsData.map((card, index) => {
        const rename = () =>  setResult(card) 
        const changeVisibility = () => setShowModal(true)

        return (

            <div className="fundamentals-card" key={index}>
                <h4>{card.name}</h4>
                <img src={`http://via.placeholder.com/300x300.png?text=${card.name}`}
                    className="fundamentals-card-image"
                    alt="modal-click"
                    onClick={() => {
                            rename(); changeVisibility()
                        }
                    }
                />
            </div>
        )
    })
    
    return (
        <>
            { showModal && (
                <SiteModal closeModal={() => setShowModal(false)}>
                    <div className="fundamentals-modal">
                        <h3>{result.name}</h3>
                        <div className="fundementals-modal-content">
                            {result.modal_content}
                        </div>
                    </div>
                </SiteModal>
            )}
            <div className="fundamentals-cards-container">
                {displayCards}
            </div>
        </>

    )

}
export default FundamentalCards