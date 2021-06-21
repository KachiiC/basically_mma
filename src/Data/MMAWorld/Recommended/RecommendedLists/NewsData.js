// Components
import SiteYoutubeLink from 'SiteTools/SiteYoutubeLink'
// Images
import ESPN_MMA from 'SiteImages/MMAWorld/Recommended/NewsOutlets/ESPN_MMA.jpg'
import MMA_Fighting from 'SiteImages/MMAWorld/Recommended/NewsOutlets/MMA_Fighting.jpg'
import BT_Sport from 'SiteImages/MMAWorld/Recommended/NewsOutlets/BT_Sport.jpg'
import MMA_Digest from 'SiteImages/MMAWorld/Recommended/NewsOutlets/MMA_Digest.jpg'
import MMA_Junkie from 'SiteImages/MMAWorld/Recommended/NewsOutlets/MMA_Junkie.jpg'

const NewsData = {
    featured_image: ESPN_MMA,
    featured_link: "https://www.youtube.com/ufc",
    small_images: [
        {
            link: SiteYoutubeLink + "MMAFightingonSBN",
            image: MMA_Fighting,
        },
        {
            link: SiteYoutubeLink + "BTSportOfficial",
            image: BT_Sport,
        },
        {
            link: SiteYoutubeLink + "mmadigest",
            image: MMA_Digest,
        },
        {
            link: SiteYoutubeLink + "MMAjunkieVideo",
            image: MMA_Junkie,
        }
    ],
    external_links: true
}

export default NewsData