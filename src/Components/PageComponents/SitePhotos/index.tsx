// COMPONENTS
import SinglePhoto from './components/SinglePhoto'
// CSS
import './SitePhotos.css'
// PROPS
import { SitePhotoProps } from "Props/SiteProps/SitePhotos"

const SitePhotos = (props: SitePhotoProps) => {

    const displayCards = props.data.map(card => {

        const { image ,title, description, text_color } = card

        return (
            <SinglePhoto 
                description={description}
                image={image}
                title={title}
                text_color={text_color}
            />
        )
    })
    
    return <>{displayCards}</>
}

export default SitePhotos