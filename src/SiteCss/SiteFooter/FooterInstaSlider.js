import React, {useState, useEffect} from 'react'
// CSS
import { Empty } from 'antd';
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading';
// Components
import SiteSlider from 'Components/SiteSlider'

const HomeInstaSlider = () => {

    const [instaData, setInstaData] = useState([{
            "post_link": "CHUKLpwJAuM"
        }
    ])
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect (() => {
        fetch("https://kachiis-rest.herokuapp.com/api/instagram_list/")
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

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable) ? (
            <SiteSlider data={instaData} 
                title="Follow us on instagram! @basically_mma" 
                size="big"
            />
        ) :(
            <Empty />
        )
    )

    return renderLogic
}

export default HomeInstaSlider