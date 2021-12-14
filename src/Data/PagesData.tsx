// HIDDEN
import Test from "Pages/Hidden/Test"
// MENUS
import Advanced from "@data/Advanced"
import Basics from "@data/Basics"
import MMAWorld from "@data/MMAWorld"
// PAGES
import About from "@pages/About"
import Store from "@pages/Store"

export const DisplayedPagesData = [
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

export const HiddenPagesData = [
    {
        title: "Test",
        content: <Test />
    }
]