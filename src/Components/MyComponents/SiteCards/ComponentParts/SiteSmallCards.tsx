import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

interface dataProps {
    external_links: boolean;
    title: string;
    image: string;
    link: string;
}

interface Props {
    data: {
        small_images: {
            title?: string;
            link?: string;
            image: any;
            map: (item: object) => dataProps
            indexOf: (item: object) => number
        };  
        external_links: boolean;
    };
}

const SiteSmallCards = (props: Props) => {

    const smallImages = props.data.small_images

    const displayImagesList = smallImages.map((item : dataProps) => (
            <div className="small-image-container" key={smallImages.indexOf(item)}>
                <SiteCardsImage
                    external_links={props.data.external_links}
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