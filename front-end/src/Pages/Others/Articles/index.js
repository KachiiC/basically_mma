import React from 'react'
// Components
import ArticlesList from './Components/ArticlesList'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'

const Articles = () => (
        <div className="site-row">
            <ArticlesList />
            <SiteSidebarLong />
        </div>
    )

export default Articles