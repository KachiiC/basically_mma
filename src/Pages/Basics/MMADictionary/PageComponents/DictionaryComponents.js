import React from 'react'
// Components
import { Collapse } from 'antd';
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'
import DictionaryPanel from './DictionaryPanel';

const DictionaryComponents = (props) => {

    const {Panel} = Collapse; 
    
    const displayedTabs = props.data.map((tab, index) => {
      
        const displayMedia = props.example_type === "Video" ?
            <SiteYoutubeVideo youtube_id={props.example} />
            :
            <img src={`http://via.placeholder.com/560x315.png?text=${tab.title}%20Placeholder`}
                alt="tab-pic"
                className="term-example-media"
            />
        
        return (
            <Panel header={<div className="term-tab">{tab.title}</div>}>
                <DictionaryPanel
                    definition={tab.definition}
                    media={displayMedia}
                    key={index}
                />
            </Panel>
        )
    }) 
      
    return (
        <Collapse>
            {displayedTabs}
        </Collapse>
    )

}

export default DictionaryComponents