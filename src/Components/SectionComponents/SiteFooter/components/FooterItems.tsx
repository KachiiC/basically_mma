// CSS

// PROPS
import { footerCopyrightProps, FooterLinkProps } from "../SiteFooterProps"
import { stringDataProps } from 'Props/PropsTemplates'
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"
import { StringJoin } from "Tools/StringTools"

export const FooterCopyRight = (props: footerCopyrightProps) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)

export const FooterHeading = (props: {heading?: string}) => RenderLogic(<h3>{props.heading}</h3>, "")

export const FooterLink = (props: FooterLinkProps) => {

    const {
        external_link,
        link,
        title,
        span
    } = props

    return (
        <div className={`site-col-${span} footer-link`}
            key={title}
        >
            <SiteLink
                link={`${RenderLogic(external_link, `/${link}`)}`}
                type={external_link ? "external" : "local"}
                placeholder={StringJoin(title, "_", "")} 
            />
        </div>
    )
}

export const FooterLogos = (props: stringDataProps) => {

    const { icon, link } = props

    const iconImage = (
        <SiteIcon 
            type={icon} 
            size="2x"
        />
    )

    return (
        <div className="site-col-1">
            <SiteLink
                link={RenderLogic(link, "")}
                placeholder={iconImage}
                type="external"  
            />
        </div>
    )
}

