// PAGES
import Fighters from "@pages/MMAWorld/Fighters"
import MMANews from "@pages/MMAWorld/MMANews"
import Recommended from "@pages/MMAWorld/Recommended"
import Promotions from "@pages/MMAWorld/Promotions"


const MMAWorld = [
    {
        title: "Fighters",
        content: <Fighters />
    }, 
    {
        title: "Promotions",
        content: Promotions
    },
    {
        title: "News",
        content: <MMANews />
    },
    {
        title: "Recommended",
        content: Recommended
    },
    // {
    //     title: "Best of MMA",
    //     content: <BestOfMMA />
    // },
]


export default MMAWorld