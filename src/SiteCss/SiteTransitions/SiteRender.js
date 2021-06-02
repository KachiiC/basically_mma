import React from 'react'
// Components
import SiteLoading from './SiteLoading'
import SiteEmpty from './SiteEmpty'

const SiteRender = (props) => {

    const renderLogic = (props.data.IsFetching)?(
        <SiteEmpty />
      ):(
          (props.data.isDisplayable) ? (
            props.component
          ):(
            <SiteLoading span={props.span}/>
          )
        )

    return renderLogic
}

export default SiteRender
