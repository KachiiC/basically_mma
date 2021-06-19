import React from 'react'
// CSS
import './AntdTabs.css'
// COMPONENTS
import { Tabs } from 'antd';
import SiteYoutubeVideo from 'Components/MyComponents/SiteYoutubeVideo'

interface tabProps {
    title: string;
    example: string;
    content: any;
}

interface Props {
    width: any;
    size: any;
    overflow: string;
    data: tabProps[];
}

const AntdTabs = (props: Props) => {

    const { TabPane } = Tabs;
    
    const renderTabs = props.data.map((tab) => {

        const exampleLogic = () => {
            if (tab.example) {
                return <SiteYoutubeVideo youtube_id={tab.example} />
            }
        }

        const overflowLogic = () => {
            if (props.overflow) {
                return "overflow-logic"
            }
        }
        
        return (
            <TabPane tab={tab.title} key={tab.title}>
                <div className={`tabs-height ${overflowLogic()}`}>
                    {tab.content}
                </div>
                {exampleLogic()}
            </TabPane> 
        )
    })

    const sizeLogic = props.size ? props.size : "small"
    const widthLogic = props.width ? props.width: 90

    return (
        <div className={`w-${widthLogic} m-auto`}>
            <Tabs 
                defaultActiveKey="0" 
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