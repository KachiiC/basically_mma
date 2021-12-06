// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
// PROPS
import { FilterGalleryProps } from "Props/Components/FilterComponentProps/FilterGalleryProps"

const GalleryComponent = (props: FilterGalleryProps) => {
    
    // PROPS
    const { buttons, card_size, data, type } = props

    return (
        <>
            <div className="filter-buttons-container w-80" >
                {buttons}
            </div>
            {/* Using site cards as the displayed data */} 
            {/* The cards will be filtered on click on the level above */}
            <div className="filter-gallery-cards">
                <SiteCards 
                    data={data} 
                    card_size={card_size}
                    type={type}
                />
            </div>
        </>
    )
}

export default GalleryComponent