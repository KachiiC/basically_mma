import React from 'react'
import WhatIsMMAComponent from 'Pages/Basics/WhatIsMMA'
import HistoryOfMMAComponent from 'Pages/Basics/HistoryOfMMA'
import RulesOfMMAComponent from 'Pages/Basics/RulesOfMMA'
import MMADictionaryComponent from 'Pages/Basics/MMADictionary'

export const WhatIsMMA = WhatIsMMAComponent
export const HistoryOfMMA = <HistoryOfMMAComponent />
export const RulesOfMMA = <RulesOfMMAComponent />
export const MMADictionary = <MMADictionaryComponent />

export default {
    WhatIsMMA,
    HistoryOfMMA,
    RulesOfMMA,
    MMADictionary  
}