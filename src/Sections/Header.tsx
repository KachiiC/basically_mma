// COMPONENTS
import SiteNavbar from "Components/SectionComponents/SiteNavbar"
// DATA
import DataOverview from "Data/DataOverview"
import { DisplayedPagesData } from "Data/PagesData"

const SiteHeader = (
    <SiteNavbar 
        data={DisplayedPagesData} 
        title={DataOverview.navbar_data.title}
    />
)

export default SiteHeader