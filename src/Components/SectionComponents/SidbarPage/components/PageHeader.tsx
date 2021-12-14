const PageHeader = (header: string | undefined) => {

    if (header) {
        return (
            <img src={header} 
                alt="page-header" 
                className="page-container-image" 
            />
        )
    }
}

export default PageHeader