export interface TiltCardProps {
    name: string 
    type: string
    image: string
    content: JSX.Element
}

export interface SiteTiltCardsProps {
    data: TiltCardProps[]
}