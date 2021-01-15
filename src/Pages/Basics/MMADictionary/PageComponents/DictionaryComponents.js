import React from 'react'
// Components
import { Collapse } from 'antd';
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const DictionaryComponents = (props) => {

    const {Panel} = Collapse; 

    const filteredTabs = props.data.filter((term) => term.type === `${props.type}`)
    
    const displayedTabs = filteredTabs.map((tab, index) => {

        const displayMedia = tab.example_type === "Video" ?
            <SiteYoutubeVideo youtube_id={tab.example} key={index}/>
            :<img 
                src={`http://via.placeholder.com/560x315.png?text=${tab.name}%20Placeholder`}
                alt="tab-pic"
                key={index}
                className="term-example-media"
            />
      
        return (
            <Panel 
                header={
                    <div className="term-tab">{tab.title}</div>
                } 
                key={tab.pk}
            >
                <div className="term-content">
                    <p className="term-definition">
                        <b>Definition</b>: {tab.definition}
                    </p>
                        {displayMedia}
                </div>
            </Panel>
        )
    }) 
      
    return (
        <>
            <h4>{props.type} Terms</h4>
            <Collapse>
                {displayedTabs}
            </Collapse>
        </>
    )

}

export default DictionaryComponents