import React from 'react'
// CSS
import './Articles.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import ArticlesList from './PageComponents/ArticlesList'

const Articles = () => (
        <MainAndSidebar  videos="4">
            <ArticlesList />
        </MainAndSidebar>
    )

export default Articles