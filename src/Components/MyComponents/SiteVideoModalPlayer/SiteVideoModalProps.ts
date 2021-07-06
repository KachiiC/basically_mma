export interface SiteVideoModalPlayerProps {
    title: string | undefined;
    upload_date: string | undefined;
    youtube_id: string | undefined;
    description: string | undefined;
}

export interface VideoModalSuggestionProps {
    video_thumbnail: string | undefined;
    video_title: string | undefined;
    click: any;
}

export interface fightProps {
    video_title: string | undefined;
    video_id: string | undefined;
    video_description: string | undefined;
    video_thumbnail: string | undefined;
    upload_date: string | undefined;
}

export interface SiteVideoModalProps {
    closeModal?: any;
    suggestions_url?: any; 
    video_title?: string | undefined;
    youtube_id?: string | undefined;
    upload_date: string | undefined;
    video_description: string | undefined;
}