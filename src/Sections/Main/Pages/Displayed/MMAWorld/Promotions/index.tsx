// COMPONENTS
import SitePhotos from "Components/PageComponents/SitePhotos"
import PromotionsIntroduction from "./components/PromotionsIntroduction"
// CSS
import './Promotions.css'
// DATA
import PromotionsData from "Data/Main/Displayed/MMAWorld/Pages/Promotions"

const Promotions = () => {
    
    return (
        <div className="promotions-page">
            {PromotionsIntroduction}
            <div className="promotions-gallery">
                <SitePhotos data={PromotionsData} />
            </div>
        </div>
    )
}

export default Promotions