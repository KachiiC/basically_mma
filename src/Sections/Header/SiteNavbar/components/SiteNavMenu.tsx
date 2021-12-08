// COMPONENTS
import { SiteLogo, SmallMenuDropdown, SmallMenuIcon } from "./SiteNavLink"
// PROPS
import { SiteNavbarProps } from "Props/Sections/HeaderProps"
// TOOLS
import { DisplayMenuList, DisplayMenuType } from "../tools/SiteNavbarTools"
import { RenderLogic } from "Tools/FunctionTools"

// NAV MENU
export const SiteNavMenu = (props: SiteNavbarProps) => {

    const { click, data, title } = props

    const SiteNav = (
        <div className="site-nav-menu">
            <DisplayMenuList 
                data={data} 
                type="nav"
            />
        </div>
    )

    return (
        <div className="site-navbar">
            <SiteLogo title={title} />
            {SiteNav}
            <SmallMenuIcon click={click} />
        </div>
    )
}

// SMALL  MENU
export const SmallNavMenu = (props: SiteNavbarProps) => {

    const { click, data } = props

    const menu_block = data.map(obj => {

        const menuLogic = RenderLogic(obj.sub_menu, obj)

        const menuProps = {
            click: click,
            key: obj.title,
            data: menuLogic
        } 

        return obj.sub_menu ? 
            <SmallMenuDropdown
                {...menuProps}
                title={obj.title}
            />
            : 
            <DisplayMenuType
                {...menuProps}
                type="small" 
            />
    })

    return (
        <div className="small-menu">
            {menu_block}
        </div>
    )
}