export interface timelineItemProps {     
    year: number;
    name: string;
    event: string;
    key?: any;
}

export interface timelineProps {
    data: timelineItemProps[];
}