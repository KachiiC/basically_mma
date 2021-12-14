import { Switch } from "react-router-dom"
// DATA
import { DisplayedPagesData, HiddenPagesData } from "Data/PagesData"
// import { FooterPages } from "Data/FooterData"
// TOOLS
import { RoutesRender } from "Tools/RoutersRender"
import { LinkRenderer } from "Tools/RoutersRender"
import HomeRoute from "./Hidden/Home"

const Routes = [
    DisplayedPagesData,
    // FooterPages,
    HiddenPagesData,
]

const RenderRoutes = Routes.map(route => {
    
    // Creates a Route for each link
    LinkRenderer(route)

    return RoutesRender(route)
})

const PagesRouter = ( 
    <Switch>
        {RenderRoutes}
        {HomeRoute}
    </Switch>
)

export default PagesRouter