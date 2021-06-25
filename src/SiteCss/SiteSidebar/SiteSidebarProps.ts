export interface highlightProps {
    video_thumbnail: string | undefined
    video_title: string | null | undefined
    click_logic?: any;
    highlight_logic?: any;
    playlist_videos?: { 
        video_title: string; 
        video_id: string; 
        video_description: string; 
        video_thumbnail: string; 
        upload_date: string 
    }[]
}