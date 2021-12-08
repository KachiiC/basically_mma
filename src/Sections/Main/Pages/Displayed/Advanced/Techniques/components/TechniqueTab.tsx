import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"
// PROPS
import { TechniquesProps } from "Props/Sections/Advanced/Techniques"

const TechniquesTab = (props: TechniquesProps) => {

    const { description, mistakes, title, tutorial } = props

    return (
        <div className="w-90">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="site-grid-system">
                <div className="site-col-6 w-90">
                    <h4>Tutorial</h4>
                    <YoutubePlayer 
                        id={tutorial} 
                        width="100%"
                    />
                </div>
                <div className="site-col-6 w-90">
                    <h4>Mistakes</h4>
                    <YoutubePlayer 
                        id={mistakes} 
                        width="100%"
                    />
                </div>
            </div>
        </div>
    )
}

export default TechniquesTab