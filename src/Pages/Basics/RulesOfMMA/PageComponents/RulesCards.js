import React, { useState } from 'react'
// Components
import SiteTabs from 'Components/SiteTabs'
import SiteModal from 'Components/SiteModal'
// Data 
import RulesData from 'Data/Basics/RulesOfMMA/RulesData'

const RulesCards = () => {

    const [showModal, setDisplayModal] = useState(false)

    const modalControl = () => showModal === true ? 
        setDisplayModal(false): 
        setDisplayModal(true)

    return (
        <div className="rules-of-mma-container">
            <h5>For a full list of rules, here is a list of the unified rules</h5>
            <div className="history-of-mma-button" 
                onClick={modalControl}>
                The Unified Rules of MMA
            </div>
            { showModal && (
                    <SiteModal closeModal={modalControl} >
                        <div className="rules-modal">
                            <SiteTabs 
                                tabs={RulesData} 
                                grid_size="14" 
                                tab_size="2"
                                overflow="yes"
                            />
                        </div>
                    </SiteModal>
                )
            }
        </div>
    )
}

export default RulesCards