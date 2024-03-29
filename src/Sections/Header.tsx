//} COMPONENTS
import SiteNavbar from "Components/SectionComponents/SiteNavbar"
// DATA
import DataOverview from "Data/DataOverview"
import {PagesData} from "@data/PagesData"

const SiteHeader = (
    <SiteNavbar 
        data={PagesData} 
        title={DataOverview.navbar_data.title}
    />
)

export default SiteHeader