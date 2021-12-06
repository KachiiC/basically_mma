// COMPONENTS
import SiteArticle from 'Components/PageComponents/SiteArticles'
// CSS
import './Home.css'
// DATA
import { HomeData } from './HomeData'

const Home = (
    <SiteArticle 
        link_type="local" 
        data={HomeData} 
    />
)

export default Home
