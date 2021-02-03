// Components
import SiteYoutubeLink from 'SiteCss/SiteYoutubeLink'
// Images
import Weasle from 'SiteImages/MMAWorld/Recommended/BreakdownAnalysis/Weasle.jpg'
import Morning_Kombat from 'SiteImages/MMAWorld/Recommended/BreakdownAnalysis/Morning_Kombat.jpg'
import Inside_The_Octagon from 'SiteImages/MMAWorld/Recommended/BreakdownAnalysis/Inside_the_octagon.jpg'
import Jack_Slack from 'SiteImages/MMAWorld/Recommended/BreakdownAnalysis/Jack_Slack.jpg'
import Full_Reptile from 'SiteImages/MMAWorld/Recommended/BreakdownAnalysis/Full_Reptile.jpg'

const BreakdownsData = {
    featured_link: SiteYoutubeLink + "TheWeasle17",
    featured_image: Weasle,
    small_images: [
        {
            link: SiteYoutubeLink + "MorningKombat",
            image: Morning_Kombat,
        },
        {
            link: SiteYoutubeLink + "UFCwatch?v=DgQt2QEGRVg&list=PL9m3-_Hv6qNgxCn8Oo05rvafPCZ6FHuZf",
            image: Inside_The_Octagon
        },
        {
            link: SiteYoutubeLink + "UC2i7H-EzzpQLeaj3Qplatjw",
            image: Jack_Slack
        },
        {
            link: SiteYoutubeLink + "watch?v=Z70alrp6SZA&list=PL4N4fp6Irb5_y6FF6RlGJxm8DxlIdQSHf&ab_channel=FullReptile",
            image: Full_Reptile
        }
    ],
    external_links: true,
}

export default BreakdownsData