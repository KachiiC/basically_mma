import FundamentalsImage from 'SiteImages/Others/Home/mma_fundamentals.jpg'
import DictionaryImage from 'SiteImages/Others/Home/mma_dictionary.jpg'
import FightStrategiesImage from 'SiteImages/Others/Home/mma_fight_strategies.jpg'
import RecommendedImage from 'SiteImages/Others/Home/mma_recommended.jpg'
import TechniquesImage from 'SiteImages/Others/Home/mma_techniques.jpg'

const HomeRecommendedCards = {
    featured_image: DictionaryImage,
    featured_title: "mma-dictionary",
    featured_link: "https://www.youtube.com/",
    small_images: [
        {
            image: FundamentalsImage,
            title: "fundamentals",
        },
        {
            image: TechniquesImage,
            title: "techniques",
        },
        {
            image: FightStrategiesImage,
            title: "fight-strategies",
        },
        {
            image: RecommendedImage,
            title: "recommended"
        }
    ],
    external_links: false
}

export default HomeRecommendedCards