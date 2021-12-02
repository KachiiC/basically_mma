import BestOfMMA from "Sections/Main/Pages/Displayed/MMAWorld/BestOfMMA"
import Fighters from "Sections/Main/Pages/Displayed/MMAWorld/Fighters"
import MMANews from "Sections/Main/Pages/Displayed/MMAWorld/MMANews"
import Promotions from "Sections/Main/Pages/Displayed/MMAWorld/Promotions"
import Recommended from "Sections/Main/Pages/Displayed/MMAWorld/Recommended"

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
        title: "Best of MMA",
        content: <BestOfMMA />
    },
    {
        title: "Recommended",
        content: <Recommended />
    },
]


export default MMAWorld