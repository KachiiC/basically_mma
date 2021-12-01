export interface SingleArticleProps {
    date: string;
    image: string;
    title: string;
    description: string;
    link: string;
}


export interface SiteArticleProps {
    data: SingleArticleProps[]
}