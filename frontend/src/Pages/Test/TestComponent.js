import React, { useState, useEffect} from 'react'
// CSS

// Components
import { Collapse } from 'antd';

const TestTabs = (props) => {
  
  const {Panel} = Collapse; 

  const filteredTabs = props.data.filter((term) => {
    return term.type === `${props.type}`
  })
  
  const displayedTabs = filteredTabs.map((sub) => {

    const displayMedia = sub.example_type === "video" ? 
      <iframe 
        width="560" 
        height="315"
        title="definition-example" 
        src={`https://www.youtube.com/embed/${sub.example}`}
        frameborder="0" 
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowFullScreen 
      />: 
      <img src="http://via.placeholder.com/560x315.png?text=Placeholder%201" alt="tab-pic"/>
    
    return (
        <Panel header={<div className="term-tab">{sub.name}</div>} key={sub.pk}>
            <p className="term-definition"><b>Definition:</b> {sub.definition}</p>
            <div className="term-example-media">
              {displayMedia}
            </div>
        </Panel>
    )
  }) 
    
    return (
      <Collapse>
        {displayedTabs}
      </Collapse>
    )

}


export default TestTabs