import React from 'react'
// COMPONENTS
import { Tabs } from 'antd';
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const AntdTabs = (props) => {

    const { TabPane } = Tabs;
    
    const renderTabs = props.data.map((tab, index) => {

        const exampleLogic = () => {
            if (tab.example) {
                return <SiteYoutubeVideo youtube_id={tab.example} />
            }
        }
        
        return (
            <TabPane tab={tab.title} key={index}>
                <div>
                    {tab.content}
                </div>
                {exampleLogic()}
            </TabPane> 
        )
    })

    const sizeLogic = props.size ? props.size : "small"

    return (
        // <div className="">
        <Tabs defaultActiveKey="0" 
            type="card" 
            size={sizeLogic}
            centered
        >
            {renderTabs}
        </Tabs>
        // </div>
    )
}

export default AntdTabs