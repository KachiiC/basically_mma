import BestOfMMA from "Sections/Main/Pages/Displayed/MMAWorld/BestOfMMA"
import MMANews from "Sections/Main/Pages/Displayed/MMAWorld/MMANews"
import Promotions from "Sections/Main/Pages/Displayed/MMAWorld/Promotions"
import Recommended from "Sections/Main/Pages/Displayed/MMAWorld/Recommended"

const MMAWorld = [
    {
        title: "Best of mma",
        content: <BestOfMMA />
    },
    {
        title: "MMA Promotions",
        content: <Promotions />
    },
    {
        title: "Recommended",
        content: <Recommended />
    },
    {
        title: "News",
        content: <MMANews />
    },
]

export default MMAWorld