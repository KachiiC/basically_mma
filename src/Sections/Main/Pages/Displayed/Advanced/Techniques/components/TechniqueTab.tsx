import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"

const TechniquesTab = (props: any) => {

    const { description, mistakes, tutorial } = props
    

    return (
        <div className="w-90 m-auto">
            <p>{description}</p>
            <div className="site-grid-system">
                <div className="site-col-6 w-90 m-auto">
                    <h4>Tutorial</h4>
                    <YoutubePlayer 
                        id={tutorial} 
                        width="100%"
                    />
                </div>
                <div className="site-col-6 w-90 m-auto">
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