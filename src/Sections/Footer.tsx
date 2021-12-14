// DATA
import DataOverview from "Data/DataOverview"
import { FooterLogoData, FooterPages } from "Data/FooterData"
// COMPONENTS
import SiteFooter from "Components/SectionComponents/SiteFooter"

const { heading, name, year } = DataOverview.footer_data

const SiteFooterProps = {
    heading: heading,
    logos: FooterLogoData,
    links: FooterPages,
    name: name,
    year: year
}

const Footer = <SiteFooter {...SiteFooterProps} />

export default Footer