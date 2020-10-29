import React from 'react'
// CSS
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import WhatIsMMADescription from './PageComponents/WhatIsMMADescription'
import FirstUfcVideo from './PageComponents/FirstUfcVideo'

const WhatIsMMA = () => (

        <MainAndSidebar videos="3">
            <WhatIsMMADescription />
            <FirstUfcVideo />
        </MainAndSidebar>
        
)

export default WhatIsMMA