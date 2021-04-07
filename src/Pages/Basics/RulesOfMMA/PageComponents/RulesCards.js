import React from 'react'
// Components
import SiteTabs from 'Components/SiteTabs'
// Data 
import RulesData from 'Data/Basics/RulesOfMMA/RulesData'

const RulesCards = () => (
    <div className="rules-of-mma-container">
        <div className="rules-modal w-100 h-100 site-span-12">
            <SiteTabs 
                tabs={RulesData}
                border="yes"
            />
        </div>
    </div>
)

export default RulesCards