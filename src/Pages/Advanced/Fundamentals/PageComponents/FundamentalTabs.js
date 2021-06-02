import React from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import AntdTabs from 'Components/ExternalComponents/AntdTabs'

const FundamentalTabs = (
    
    <div className="fundamental-tabs">
        <AntdTabs
            data={fundamentalsData}
        />
    </div>
    
)

export default FundamentalTabs