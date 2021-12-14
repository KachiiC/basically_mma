export interface subMenuProps {
    content?: JSX.Element
    external_link?: string
    header?: string 
    link?: string
    title: string
}

export interface pageDataProps {
    content?: JSX.Element
    external_link?: string
    header?: string
    link?: string
    sub_menu?: subMenuProps[]
    title: string
}

export interface pageTemplateProps {
    name: string | undefined
}