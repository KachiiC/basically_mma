export interface carouselRowImageProps {
    video_thumbnail: string | undefined;
    video_title: string | undefined;
    click: any;
}

export interface videoCarouselProps {
    click: any;
    displayed_image: string;
    row_images: number
    images: any
}

export interface imageProps {
    video_title: string | undefined;
    video_thumbnail: string | undefined;
}

export type siteVideoCarouselProps = {
    data: any;
    row_images: number;
    title?: string;
    suggestions_url: string;
    dispatchShowModal: any
}

