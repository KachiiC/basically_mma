export interface FighterDataProps {
    link: string
    name: string
    rank: number
    weight_class: string
}

export interface FighterRankingProps { 
    data: FighterDataProps[]
}