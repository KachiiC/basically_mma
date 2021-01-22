import React,{ useEffect, useState } from 'react'
// Components
import SiteInstagramPost from 'Components/SiteInstagramPost'

const FeaturedArticle = () => {

    const [isDisplayable, setIsDisplayable] = useState()
    const [isFetching, setIsFetching] = useState()
    const [instaData, setInstaData] = useState()

    useEffect (() => {
        fetch("https://kachiis-rest.herokuapp.com/api/instagram_posts/")
        .then(response => response.json())
        .then((responseData) => {
            setIsDisplayable(true)
            setIsFetching(false)
            setInstaData(
                responseData.slice(0,36).sort(
                    (a,b) => b.time_stamp - a.time_stamp)
                )
        })
        .catch(error => {
            setIsFetching(false)
            console.log(error)
        })
    },[])

    return (
        <div className="home-featured-article">
            <SiteInstagramPost media="CKH7BXqpyo6"/>
        </div>
    )
}

export default FeaturedArticle