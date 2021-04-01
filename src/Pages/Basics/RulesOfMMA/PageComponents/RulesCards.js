import React, { useState } from 'react'
// Components
import SiteTabs from 'Components/SiteTabs'
import SiteModal from 'Components/SiteModal'
// Data 
import RulesData from 'Data/Basics/RulesOfMMA/RulesData'
import SiteLinkLargeButton from '../../../../SiteCss/SiteLinkLargeButton'

const RulesCards = () => {

    const [showModal, setDisplayModal] = useState(false)

    const modalControl = () => showModal === true ? 
        setDisplayModal(false): 
        setDisplayModal(true)

    return (
        <div className="rules-of-mma-container">
            <h5>For a full list of rules, here is a list of the unified rules</h5>
            <SiteLinkLargeButton 
                click={modalControl} 
                text="The Unified Rules of MMA" 
            />
            { showModal && (
                    <SiteModal closeModal={modalControl} >
                        <div className="rules-modal w-100 h-100 site-span-12">
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