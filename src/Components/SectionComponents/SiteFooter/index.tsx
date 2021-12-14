// COMPONENTS
import { FooterLinksSection, FooterLogoSection } from "./components/FooterSection"
import { FooterHeading, FooterCopyRight } from "./components/FooterItems"
// CSS 
import "./SiteFooter.css"
// PROPS
import { SiteFooterProps } from "./SiteFooterProps"

const SiteFooter = (props: SiteFooterProps) => {

    const {
        heading,
        links,
        logos,
        name,
        year
    } = props

    return (
        <footer>
            <FooterHeading 
                heading={heading} 
            />
            <FooterLogoSection 
                data={logos} 
            />
            <FooterLinksSection 
                data={links} 
            />
            <FooterCopyRight 
                name={name}
                year={year}
            />
        </footer>
    )
}

export default SiteFooter