import SidebarPage from "Components/PageComponents/SidebarPage"
import HistoryOfMMA from "Sections/Main/Pages/Displayed/Basics/HistoryOfMMA"
import RulesOfMMA from "Sections/Main/Pages/Displayed/Basics/RulesOfMMA"
// PAGES
import WhatIsMMA from "Sections/Main/Pages/Displayed/Basics/WhatIsMMA"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import MMADictionary from "./Pages/MMADictionary"

const Basics = [
    {
        content: WhatIsMMA,
        header: "https://kachiic.github.io/basically_mma/static/media/WhatIsMMA.0240faf1.jpg",
        title: "Introduction",
    },
    {
        title: "History of MMA",
        content: HistoryOfMMA
    },
    {
        title: "Rules of MMA",
        content: RulesOfMMA
    },
    {
        title: "MMA Dictionary",
        content: <MMADictionary />
    }
]

Basics.map(page => {

    page.content = (
        <SidebarPage 
            content={page.content} 
            title={page.title}
            header={RenderLogic(page.header, "")}
        />
    )

    return page
})

export default Basics