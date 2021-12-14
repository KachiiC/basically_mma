// COMPONENTS
import SidebarPage from "Components/SectionComponents/SidbarPage"
// IMAGES
import BasicHeaders from "Data/Images/Basics"
// PAGES
import HistoryOfMMA from "@pages/Basics/HistoryOfMMA"
import RulesOfMMA from "@pages/Basics/RulesOfMMA"
import WhatIsMMA from "@pages/Basics/WhatIsMMA"
import MMADictionary from "./Pages/MMADictionary"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const {
    WhatIsMMAHeader,
    HistoryOfMMAHeader,
    RulesOfMMAHeader
} = BasicHeaders

const Basics = [
    {
        content: WhatIsMMA,
        header: WhatIsMMAHeader,
        title: "Introduction",
    },
    {
        title: "History of MMA",
        content: HistoryOfMMA,
        header: HistoryOfMMAHeader
    },
    {
        title: "Rules of MMA",
        content: RulesOfMMA,
        header: RulesOfMMAHeader
    },
    {
        title: "MMA Dictionary",
        content: <MMADictionary />
    }
]

Basics.map(page => {

    const { content, header, title } = page

    page.content = (
        <SidebarPage 
            content={content} 
            title={title}
            header={RenderLogic(header, "")}
        />
    )

    return page
})

export default Basics