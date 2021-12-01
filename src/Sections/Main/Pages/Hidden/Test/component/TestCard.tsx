const TestCard = (props: any) => {

    const { date, image, title, description } = props

    const imageUrl = {
        "backgroundImage": `url('${image}')`
    }
    
    return (
        <div className="gridytest">
            <div className="gridimg" style={imageUrl} />
            <div className="gridinfo">
                <h3>{title}</h3>
                <div className="gridmeta">
                    <p className="gridwhen">
                        {date}
                    </p>
                </div>
                <p className="gridexerpt">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TestCard