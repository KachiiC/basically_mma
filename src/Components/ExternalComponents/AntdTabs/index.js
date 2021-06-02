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

        const overFlowLogic = () => {
            if (props.overflow) {
                return {
                    "overflowY": "scroll",
                    "height": "400px"
                }
            }
        }
        
        return (
            <TabPane tab={tab.title} key={index}>
                <div style={overFlowLogic()}
                    className="tabs-height"
                >
                    {tab.content}
                </div>
                {exampleLogic()}
            </TabPane> 
        )
    })

    const sizeLogic = props.size ? props.size : "small"
    const widthLogic = props.width ? props.width: "90"

    return (
        <div className={`w-${widthLogic} m-auto`}>
            <Tabs defaultActiveKey="0" 
                type="card" 
                size={sizeLogic}
                centered
            >
                {renderTabs}
            </Tabs>
        </div>
    )
}

export default AntdTabs