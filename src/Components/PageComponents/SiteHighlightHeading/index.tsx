// CSS
import './SiteHighlightHeading.css'

const SiteHighlightHeading = (props: {title: string}) => (
    <div className="site-highlight-title">
        <h3>
            {props.title}
        </h3>
        <div className="site-highlight-title-filled">
            {props.title}
        </div>
    </div>
)


export default SiteHighlightHeading