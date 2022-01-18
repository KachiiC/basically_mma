// COMPONENTS
import SidebarHeader from "./components/SidebarHeader"
import { SidebarRecommendation } from "./components/SidebarVideos"
// CSS
import "./Sidebar.css"

const Sidebar = (
    <div className="w-90">
        {SidebarHeader}
        <SidebarRecommendation />
    </div>
)

export default Sidebar