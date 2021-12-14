const MMANewsDataTool = (data: any[]) => {

    return data.map(article => {

        return {
            date: article.post_time_stamp,
            description: article.post_description,
            image: article.thumbnail_url,
            link: article.post_link,
            title: article.title
        }
    })
}

export default MMANewsDataTool