// COMPONENTS
import SidebarPage from "Components/SectionComponents/SidbarPage"
// PAGES
import FightStrategies from "@pages/Advanced/FightStrategies"
import Fundamentals from "@pages/Advanced/Fundamentals"
import Techniques from "@pages/Advanced/Techniques"
import WeightClasses from "@pages/Advanced/WeightClasses"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const Advanced = [
    {
        title: "FUNDAMENTALS",
        content: Fundamentals
    },
    {
        title: "TECHNIQUES",
        content: <Techniques/>
    },
    {
        title: "FIGHT STRATEGIES",
        content: FightStrategies
    },
    {
        title: "WEIGHT CLASSES",
        content: WeightClasses
    }
    // {
    //     title: "FIGHTER PAY",
    //     content: <FighterPay />
    // },
]

Advanced.map((page: any) => {

    page.content = (
        <SidebarPage 
            content={page.content} 
            title={page.title}
            header={RenderLogic(page.header, "")}
        />
    )

    return page
})

export default Advanced