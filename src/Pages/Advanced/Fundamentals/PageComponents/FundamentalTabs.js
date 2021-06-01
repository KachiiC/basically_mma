import React from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import MaterialUITabs from 'Components/ExternalComponents/MaterialUITabs'

const FundamentalTabs = (
    
    <div className="fundamental-tabs">
        <MaterialUITabs
            data={fundamentalsData}
        />
    </div>
    
)

export default FundamentalTabs