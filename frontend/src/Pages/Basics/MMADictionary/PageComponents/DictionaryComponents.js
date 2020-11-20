import React from 'react'
// Components
import { Collapse } from 'antd';

const DictionaryComponents = (props) => {

    const {Panel} = Collapse; 

    const filteredTabs = props.data.filter((term) => term.type === `${props.type}`)
    
    const displayedTabs = filteredTabs.map((tab) => {

        const displayMedia = tab.example_type === "Video" ?
            <iframe 
                width="560" height="315"
                title="definition-example" 
                src={`https://www.youtube.com/embed/${tab.example}`}
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture" allowFullScreen 
            />: 
            <img src="http://via.placeholder.com/560x315.png?text=Placeholder%201" alt="tab-pic"/>
      
        return (
            <Panel header={<div className="term-tab">{tab.name}</div>} key={tab.pk}>
                <p className="term-definition"><b>Definition:</b> {tab.definition}</p>
                <div className="term-example-media">
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