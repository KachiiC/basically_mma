// COMPONENTS
import SitePhotos from "@components/SitePhotos"
import PromotionsIntroduction from "./components/PromotionsIntroduction"
// CSS
import './Promotions.css'
// DATA
import PromotionsData from "@data/MMAWorld/Pages/Promotions"

const Promotions = (
    <div className="promotions-page">
        {PromotionsIntroduction}
        <div className="promotions-gallery">
            <SitePhotos data={PromotionsData} />
        </div>
    </div>
)

export default Promotions