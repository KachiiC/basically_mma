const MMANewsDataTool = (data: any) => {

    return data.map((article: any) => {
        return {
            title: article.title,
            thumbnail: article.thumbnail_url,
            time_stamp: article.post_time_stamp,
            description: article.post_description,
            link: article.post_link,
        }
    })
}

export default MMANewsDataTool