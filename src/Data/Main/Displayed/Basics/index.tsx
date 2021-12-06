// COMPONENTS
import SidebarPage from "Components/PageComponents/SidebarPage"
// IMAGES
import BasicHeaders from "Images/Basics"
// PAGES
import HistoryOfMMA from "Sections/Main/Pages/Displayed/Basics/HistoryOfMMA"
import RulesOfMMA from "Sections/Main/Pages/Displayed/Basics/RulesOfMMA"
import WhatIsMMA from "Sections/Main/Pages/Displayed/Basics/WhatIsMMA"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import MMADictionary from "./Pages/MMADictionary"

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