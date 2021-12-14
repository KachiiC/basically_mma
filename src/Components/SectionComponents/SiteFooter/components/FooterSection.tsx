// COMPONENTS
import { FooterLink, FooterLogos } from './FooterItems'
// CSS
import MediaQuery from 'react-responsive'
// PROPS
import { FooterLinksSectionProps, FooterLogoSectionProps } from '../SiteFooterProps'
// TOOLS
import { GridStyle } from 'Tools/GridTools'

export const FooterLinksSection = (props: FooterLinksSectionProps) => {

    const { data } = props

    const displayLinks = data.map((obj) => {

        const { external_link, link, title } = obj

        const linkLogic = external_link ? 
            {
                external_link: external_link
            }:
            {
                link : link
            }

        return (
            <>
                <MediaQuery minWidth={1000}>
                    <FooterLink
                        {...linkLogic}
                        title={title}
                        span={1}
                    />
                </MediaQuery>
                <MediaQuery maxWidth={1000}>
                    <FooterLink 
                        {...props}
                        title={title}
                        span={data.length}
                    />
                </MediaQuery>
            </>
        )
    })

    return (
        <div className="footer-section">
            <div className="site-grid" 
                style={GridStyle(data.length)}
            >
                {displayLinks}
            </div>
        </div>
    )

}

export const FooterLogoSection = (props: FooterLogoSectionProps) => {

    const { data } = props

    const displayFooterItems = data.map(logo => {

        const { link, title } = logo

        return (
            <FooterLogos
                icon={title}
                link={link}
                key={title}
            />
        )
    })

    return (
        <div className="footer-section">
            <div className="site-grid" 
                style={GridStyle(data.length)}
            >
            {displayFooterItems}
            </div>
        </div>
    )
}
