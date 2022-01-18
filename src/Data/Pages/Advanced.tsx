// COMPONENTS
import SidebarPage from "Components/PageComponents/SidebarPage"
// PAGES
import FightStrategies from "@pages/Advanced/FightStrategies"
import Fundamentals from "@pages/Advanced/Fundamentals"
import Techniques from "@pages/Advanced/Techniques"
import WeightClasses from "@pages/Advanced/WeightClasses"

const Advanced = [
    {
        content: Techniques,
        title: "Techniques"
    },
    {
        content: Fundamentals,
        title: "Fundamentals"
    },
    {
        content: FightStrategies,
        title: "Fight Strategies"
    },
    {
        content: WeightClasses,
        title: "Weight Classes"
    }
]

Advanced.map((page) => {

    page.content = <SidebarPage content={page.content} />

    return page
})

export default Advanced