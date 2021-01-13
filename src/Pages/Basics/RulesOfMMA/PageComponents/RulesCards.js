import React, { useState } from 'react'
// Components
import SiteTabs from 'Components/SiteTabs'
import SiteModal from 'Components/SiteModal'
// Data 
import RulesData from 'Data/Basics/RulesOfMMA/RulesData'

const RulesCards = () => {

    const [displayModal, setDisplayModal] = useState(false)

    const modalControl = () => displayModal === true ? setDisplayModal(false): setDisplayModal(true)

    return (
        <div>
            <h1 onClick={modalControl}>Show Rules</h1>
            { displayModal && (
                
                <SiteModal closeModal={modalControl} >
                    <div className="rules-modal">
                        <SiteTabs tabs={RulesData} grid_size="14" tab_size="2"/>
                    </div>
                </SiteModal>
            )
            }
        </div>
    )
}

export default RulesCards