export interface subMenuProps {
    external_link?: string
    title: string
    content?: string | JSX.Element
    link?: string
    header?: string 
}

export interface pageDataProps {
    header?: string
    external_link?: string
    title: string
    content?: string | JSX.Element | undefined
    link?: string
    sub_menu?: subMenuProps[]
}

export interface pageTemplateProps {
    name: string | undefined
}