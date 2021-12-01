// PAGES
import Basics from "./Basics"
import Advanced from "./Advanced"
import MMAWorld from "./MMAWorld"
import Store from "Sections/Main/Pages/Displayed/Store"
import About from "Sections/Main/Pages/Displayed/About"

const PagesData = [
    {
        title: "Basics",
        sub_menu: Basics
    },
    {
        title: "Advanced",
        sub_menu: Advanced
    },
    {
        title: "MMA World",
        sub_menu: MMAWorld
    },
    {
        title: "About",
        content: About
    },
    {
        title: "Store",
        content: <Store />
    }
]

export default PagesData