// Components
import SiteYoutubeLink from 'SiteTools/SiteYoutubeLink'
// Images List
import UFC_logo from 'SiteImages/MMAWorld/Recommended/PromotionChannels/UFC_logo.jpg'
import Bellator_logo from 'SiteImages/MMAWorld/Recommended/PromotionChannels/Bellator_logo.jpg'
import One_logo from 'SiteImages/MMAWorld/Recommended/PromotionChannels/One_logo.jpg'
import PFL_logo from 'SiteImages/MMAWorld/Recommended/PromotionChannels/PFL_logo.jpg'
import Rizin_logo from 'SiteImages/MMAWorld/Recommended/PromotionChannels/Rizin_logo.jpg'

const ChannelsData = {
    featured_image: UFC_logo,
    featured_link: SiteYoutubeLink + "ufc" ,
    small_images: [
        {
            link: SiteYoutubeLink + "bellator",
            image: Bellator_logo,
        },
        {
            link: SiteYoutubeLink + "Onechampionship",
            image: One_logo,
        },
        {
            link: SiteYoutubeLink + "mmaworldseries" ,
            image: PFL_logo,
        },
        {
            link: SiteYoutubeLink + "Rizinfightingfederation" ,
            image: Rizin_logo,
        }
    ],
    external_links: true
}

export default ChannelsData