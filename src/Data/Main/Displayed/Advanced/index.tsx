import SidebarPage from "Components/PageComponents/SidebarPage"
import FighterPay from "Sections/Main/Pages/Displayed/Advanced/FighterPay"
import FightStrategies from "Sections/Main/Pages/Displayed/Advanced/FightStrategies"
import Fundamentals from "Sections/Main/Pages/Displayed/Advanced/Fundamentals"
import Techniques from "Sections/Main/Pages/Displayed/Advanced/Techniques"
import WeightClasses from "Sections/Main/Pages/Displayed/Advanced/WeightClasses"
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
        title: "FIGHTER PAY",
        content: <FighterPay />
    },
    {
        title: "WEIGHT CLASSES",
        content: <WeightClasses />
    }
]

Advanced.map((page:any) => {

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