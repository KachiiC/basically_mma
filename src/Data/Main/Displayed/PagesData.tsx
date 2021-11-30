// PAGES
import Basics from "./Basics"
import Advanced from "./Advanced"
// import MMAWorld from "./MMAWorld"
import Store from "Sections/Main/Pages/Displayed/Store"

const PagesData = [
    {
        title: "Basics",
        sub_menu: Basics
    },
    {
        title: "Advanced",
        sub_menu: Advanced
    },
    // {
    //     title: "MMA World",
    //     sub_menu: MMAWorld
    // },
    {
        title: "About",
        content: <h1>About</h1>
    },
    {
        title: "Store",
        content: <Store />
    }
]

export default PagesData