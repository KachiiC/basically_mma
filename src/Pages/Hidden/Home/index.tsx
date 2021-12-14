// COMPONENTS
import SiteArticle from '@components/SiteArticles'
import { Route } from 'react-router-dom'
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

export const HomeRoute = (
    <Route key="home" 
        path="/"
    >
        {Home}
    </Route>
)

export default Home
