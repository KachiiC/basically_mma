// Components
import SiteLoading from './SiteLoading'
import SiteEmpty from './SiteEmpty'

const SiteRender = (props) => {

  const renderLogic = (props.data.IsFetching)?(
      SiteEmpty
    ):(
        (props.data.isDisplayable) ? (
          props.component
        ):(
          SiteLoading
        )
      )

  return renderLogic
}

export default SiteRender
