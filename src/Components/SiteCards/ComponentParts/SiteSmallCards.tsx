import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage.tsx'

interface dataProps {
    external_links: boolean;
    title: string;
    image: string;
    link: string;
}

interface Props {
    data: any;
}

const SiteSmallCards = (props: Props) => {

    const smallImages = props.data.small_images

    const displayImagesList = props.data.small_images.map((item : dataProps) => (
            <div className="small-image-container" key={smallImages.indexOf(item)}>
                <SiteCardsImage 
                    external_links={props.data.external_links}
                    alt={smallImages.indexOf(item)}
                    title={item.title}
                    image={item.image}
                    link={item.link}
                />
            </div>
        )
    )

    return (
        <div className="small-image-list site-grid-system">
            {displayImagesList}
        </div>
    )

}

export default SiteSmallCards