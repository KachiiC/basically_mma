// PAGES
import MMADictionary from "@pages/Basics/MMADictionary"
import History from "@pages/Basics/HistoryOfMMA"
import Introduction from "@pages/Basics/WhatIsMMA"
import Rules from "@pages/Basics/RulesOfMMA"
import SidebarPage from "Components/PageComponents/SidebarPage"

const Basics = [
    {
        content: Introduction,
        title: "Introduction",
    },
    {
        content: History,
        title: "History",
    },
    {
        content: Rules,
        title: "Rules"
    },
    {
        content: MMADictionary,
        title: "Dictionary"
    }
]

Basics.map((page) => {

    page.content = <SidebarPage content={page.content} />

    return page
})

export default Basics