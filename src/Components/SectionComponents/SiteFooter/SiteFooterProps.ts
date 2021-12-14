export interface footerCopyrightProps {
    name: string
    year: string | number 
}

export interface FooterLogoProps { 
    title: string; 
    link: string; 
}

export interface FooterLogoSectionProps {
    data: FooterLogoProps[]
}

export interface FooterLinkProps {
    external_link?: string; 
    link?: string; 
    title: string; 
    span: number
}

export interface FooterLinksSectionProps {
    data: { 
        external_link: string; 
        link: string; 
        title: string 
    }[]
}

export interface SiteFooterProps {
    links: any[]
    logos: FooterLogoProps[]
    heading: string
    name: string ;
    year: string | number
}