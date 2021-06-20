import React from 'react'

interface Props {
    video_thumbnail: string | undefined;
    video_title: string | undefined;
    click: any;
}

const CarouselRowImage = (props: Props) => (
    <div className="site-span-1 site-border-white cursor-pointer">
        <img className="site-responsive-image site-border-white" 
            src={props.video_thumbnail} 
            alt={props.video_title} 
            onClick={props.click}
        />
    </div>
)

export default CarouselRowImage